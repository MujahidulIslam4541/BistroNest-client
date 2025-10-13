import React, { useEffect, useState } from 'react'

// ManageOrders.jsx — Admin dashboard page for managing orders (BistroNest)
// Simple, clean, and user-friendly — minimal and focused.

export default function ManageOrders() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Replace with your API call
        setLoading(true)
        setTimeout(() => {
            setOrders([
                { id: 'ORD-101', name: 'John Doe', email: 'john@example.com', total: 58, status: 'Pending', date: '2025-10-10' },
                { id: 'ORD-102', name: 'Sarah Ali', email: 'sarah@example.com', total: 72, status: 'Delivered', date: '2025-10-11' },
                { id: 'ORD-103', name: 'Imran Khan', email: 'imran@example.com', total: 45, status: 'Cancelled', date: '2025-10-12' }
            ])
            setLoading(false)
        }, 400)
    }, [])

    const updateStatus = (id, newStatus) => {
        setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o))
    }

    const handleDelete = id => {
        if (confirm('Delete this order?')) {
            setOrders(prev => prev.filter(o => o.id !== id))
        }
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Manage Orders</h2>

            <div className="overflow-x-auto bg-base-100 rounded-lg shadow">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Customer</th>
                            <th>Total ($)</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan={6} className="text-center py-8">Loading orders...</td></tr>
                        ) : orders.length === 0 ? (
                            <tr><td colSpan={6} className="text-center py-8">No orders found.</td></tr>
                        ) : (
                            orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    <td>
                                        <div className="font-medium">{order.name}</div>
                                        <div className="text-xs opacity-70">{order.email}</div>
                                    </td>
                                    <td>{order.total}</td>
                                    <td>
                                        <span className={`badge badge-sm ${order.status === 'Delivered' ? 'badge-success' : order.status === 'Cancelled' ? 'badge-error' : 'badge-warning'}`}>{order.status}</span>
                                    </td>
                                    <td>{order.date}</td>
                                    <td className="text-right">
                                        <div className="flex justify-end gap-2">
                                            {order.status !== 'Delivered' && (
                                                <button onClick={() => updateStatus(order.id, 'Delivered')} className="btn btn-xs btn-primary">Deliver</button>
                                            )}
                                            {order.status !== 'Cancelled' && (
                                                <button onClick={() => updateStatus(order.id, 'Cancelled')} className="btn btn-xs btn-outline">Cancel</button>
                                            )}
                                            <button onClick={() => handleDelete(order.id)} className="btn btn-xs btn-error">Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
