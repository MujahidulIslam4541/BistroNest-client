import React, { useEffect, useMemo, useState } from 'react'

/**
 * ManageBookings.jsx
 * Admin dashboard page for managing bookings (Bistro Nest project)
 * - Table with bookings
 * - Search, filter (status), sort, pagination
 * - Actions: Confirm, Cancel, View Details
 * - Hooks show where to plug API calls (axios/fetch)
 *
 * Styling: Tailwind + DaisyUI utility classes (no external CSS required)
 * Usage: drop this component into your admin routes (e.g. /admin/bookings)
 */

export default function ManageBookings() {
  // --- UI state ---
  const [bookings, setBookings] = useState([]) // real data should come from API
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [page, setPage] = useState(1)
  const [perPage, setPerPage] = useState(8)
  const [selected, setSelected] = useState(null) // booking selected for details
  const [sortBy, setSortBy] = useState({ key: 'createdAt', dir: 'desc' })

  // --- demo/sample data ---
  useEffect(() => {
    // Replace this block with your API call (axios / fetch)
    setLoading(true)
    const demo = new Array(23).fill(0).map((_, i) => ({
      id: `BKG-${1000 + i}`,
      customer: `Customer ${i + 1}`,
      email: `customer${i + 1}@example.com`,
      phone: `01622${String(1000 + i).slice(-4)}`,
      guests: Math.floor(Math.random() * 6) + 1,
      date: new Date(Date.now() + (i - 10) * 24 * 60 * 60 * 1000).toISOString(),
      time: `${10 + (i % 8)}:00`,
      status: ['pending', 'confirmed', 'cancelled'][i % 3],
      notes: `Table near window, prefers vegan options. demo note ${i + 1}`,
      createdAt: new Date(Date.now() - i * 3600 * 1000).toISOString()
    }))

    // simulate network
    setTimeout(() => {
      setBookings(demo)
      setLoading(false)
    }, 300)
  }, [])

  // --- derived data: filtering, searching, sorting ---
  const filtered = useMemo(() => {
    let data = bookings.slice()
    if (statusFilter !== 'all') data = data.filter(b => b.status === statusFilter)
    if (search.trim()) {
      const s = search.toLowerCase()
      data = data.filter(b => [b.id, b.customer, b.email, b.phone].some(f => f.toLowerCase().includes(s)))
    }
    // sort
    data.sort((a, b) => {
      const aVal = a[sortBy.key] ?? ''
      const bVal = b[sortBy.key] ?? ''
      if (aVal < bVal) return sortBy.dir === 'asc' ? -1 : 1
      if (aVal > bVal) return sortBy.dir === 'asc' ? 1 : -1
      return 0
    })
    return data
  }, [bookings, statusFilter, search, sortBy])

  const total = filtered.length
  const totalPages = Math.max(1, Math.ceil(total / perPage))
  useEffect(() => {
    if (page > totalPages) setPage(totalPages)
  }, [totalPages])

  const pageData = filtered.slice((page - 1) * perPage, page * perPage)

  // --- action handlers ---
  const handleConfirm = (id) => {
    // TODO: call API to confirm
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'confirmed' } : b))
  }
  const handleCancel = (id) => {
    // TODO: call API to cancel
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: 'cancelled' } : b))
  }

  const handleDelete = (id) => {
    if (!confirm('Are you sure you want to delete this booking?')) return
    // TODO: delete via API
    setBookings(prev => prev.filter(b => b.id !== id))
  }

  const exportCSV = () => {
    const rows = [
      ['ID', 'Customer', 'Email', 'Phone', 'Guests', 'Date', 'Time', 'Status', 'Notes']
    ].concat(bookings.map(b => [b.id, b.customer, b.email, b.phone, b.guests, b.date, b.time, b.status, b.notes]))

    const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n')
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `bookings_export_${new Date().toISOString().slice(0,10)}.csv`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  // small helper to format date
  const fmt = iso => {
    try { return new Date(iso).toLocaleString() } catch { return iso }
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Manage Bookings</h1>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-4">
        <div className="flex gap-2 items-center">
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by ID, customer, email or phone" className="input input-sm input-bordered w-64" />
          <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="select select-sm select-bordered">
            <option value="all">All statuses</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <select value={perPage} onChange={e => { setPerPage(Number(e.target.value)); setPage(1) }} className="select select-sm select-bordered">
            <option value={8}>8 / page</option>
            <option value={16}>16 / page</option>
            <option value={32}>32 / page</option>
          </select>
        </div>

        <div className="flex gap-2">
          <button onClick={() => { setSortBy({ key: 'createdAt', dir: sortBy.dir === 'asc' ? 'desc' : 'asc' }) }} className="btn btn-sm btn-ghost">Sort by newest</button>
          <button onClick={exportCSV} className="btn btn-sm">Export CSV</button>
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Customer</th>
              <th>Guests</th>
              <th>Date & Time</th>
              <th>Status</th>
              <th>Created</th>
              <th className="text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={8} className="text-center py-8">Loading...</td></tr>
            ) : pageData.length === 0 ? (
              <tr><td colSpan={8} className="text-center py-8">No bookings found.</td></tr>
            ) : (
              pageData.map((b) => (
                <tr key={b.id} className={b.status === 'cancelled' ? 'opacity-60' : ''}>
                  <td>
                    <input type="checkbox" className="checkbox checkbox-sm" checked={false} readOnly />
                  </td>
                  <td>{b.id}</td>
                  <td>
                    <div className="font-medium">{b.customer}</div>
                    <div className="text-xs opacity-70">{b.email} · {b.phone}</div>
                  </td>
                  <td>{b.guests}</td>
                  <td>
                    <div>{new Date(b.date).toLocaleDateString()}</div>
                    <div className="text-xs opacity-70">{b.time}</div>
                  </td>
                  <td>
                    <span className={`badge badge-sm ${b.status === 'confirmed' ? 'badge-success' : b.status === 'pending' ? 'badge-warning' : 'badge-error'}`}>{b.status}</span>
                  </td>
                  <td className="text-sm opacity-70">{fmt(b.createdAt)}</td>
                  <td className="text-right">
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setSelected(b)} className="btn btn-ghost btn-xs">Details</button>
                      {b.status !== 'confirmed' && (
                        <button onClick={() => handleConfirm(b.id)} className="btn btn-xs btn-primary">Confirm</button>
                      )}
                      {b.status !== 'cancelled' && (
                        <button onClick={() => handleCancel(b.id)} className="btn btn-xs btn-outline">Cancel</button>
                      )}
                      <button onClick={() => handleDelete(b.id)} className="btn btn-xs btn-error">Delete</button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm opacity-70">Showing {Math.min((page-1)*perPage+1, total)} - {Math.min(page*perPage, total)} of {total}</div>
        <div className="btn-group">
          <button className="btn btn-sm" onClick={() => setPage(1)} disabled={page === 1}>«</button>
          <button className="btn btn-sm" onClick={() => setPage(p => Math.max(1, p-1))} disabled={page === 1}>Prev</button>
          <button className="btn btn-sm">{page} / {totalPages}</button>
          <button className="btn btn-sm" onClick={() => setPage(p => Math.min(totalPages, p+1))} disabled={page === totalPages}>Next</button>
          <button className="btn btn-sm" onClick={() => setPage(totalPages)} disabled={page === totalPages}>»</button>
        </div>
      </div>

      {/* Details modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelected(null)}></div>
          <div className="bg-base-100 rounded-lg shadow-lg p-6 z-10 w-full max-w-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-lg font-semibold">Booking {selected.id}</h2>
                <p className="text-sm opacity-70">{selected.customer} · {selected.email} · {selected.phone}</p>
              </div>
              <div className="flex gap-2">
                {selected.status !== 'confirmed' && (
                  <button onClick={() => { handleConfirm(selected.id); setSelected(prev => ({ ...prev, status: 'confirmed' })) }} className="btn btn-sm btn-primary">Confirm</button>
                )}
                {selected.status !== 'cancelled' && (
                  <button onClick={() => { handleCancel(selected.id); setSelected(prev => ({ ...prev, status: 'cancelled' })) }} className="btn btn-sm btn-outline">Cancel</button>
                )}
                <button onClick={() => setSelected(null)} className="btn btn-sm">Close</button>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-xs opacity-70">Date</div>
                <div className="font-medium">{new Date(selected.date).toLocaleDateString()}</div>
                <div className="text-xs opacity-70 mt-2">Time</div>
                <div className="font-medium">{selected.time}</div>
              </div>

              <div>
                <div className="text-xs opacity-70">Guests</div>
                <div className="font-medium">{selected.guests}</div>
                <div className="text-xs opacity-70 mt-2">Status</div>
                <div className="font-medium">{selected.status}</div>
              </div>
            </div>

            <div className="mt-4">
              <div className="text-xs opacity-70">Notes</div>
              <div className="p-3 bg-base-200 rounded">{selected.notes}</div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button onClick={() => { navigator.clipboard?.writeText(JSON.stringify(selected, null, 2)); alert('Copied booking JSON') }} className="btn btn-sm btn-ghost">Copy JSON</button>
              <button onClick={() => handleDelete(selected.id)} className="btn btn-sm btn-error">Delete Booking</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
