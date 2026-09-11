/* ═══════════════════════════════════════════════
   MOCK DATA — Sample records for prototypes
   ═══════════════════════════════════════════════ */

window.MOCK = {
  students: [
    { id: '1', name: 'Aarav Shrestha', admission: 'ADM-2081-0001', roll: '08-014', class: 'Grade 8', section: 'A', guardian: 'Ramesh Shrestha', phone: '+977 9812345678', status: 'active', initials: 'AS', color: 'primary' },
    { id: '2', name: 'Sita Thapa', admission: 'ADM-2081-0002', roll: '08-015', class: 'Grade 8', section: 'A', guardian: 'Gita Thapa', phone: '+977 9876543210', status: 'active', initials: 'ST', color: 'blue' },
    { id: '3', name: 'Bikash Karki', admission: 'ADM-2081-0003', roll: '06-008', class: 'Grade 6', section: 'B', guardian: 'Sunita Karki', phone: '+977 9811111111', status: 'pending', initials: 'BK', color: 'amber' },
    { id: '4', name: 'Priya Gurung', admission: 'ADM-2081-0004', roll: '09-021', class: 'Grade 9', section: 'A', guardian: 'Mohan Gurung', phone: '+977 9822222222', status: 'active', initials: 'PG', color: 'green' },
    { id: '5', name: 'Rohan Tamang', admission: 'ADM-2081-0005', roll: '10-003', class: 'Grade 10', section: 'A', guardian: 'Hari Tamang', phone: '+977 9833333333', status: 'active', initials: 'RT', color: 'primary' },
  ],
  teachers: [
    { id: '1', name: 'Sunita Sharma', employee: 'EMP-001', designation: 'Senior Math Teacher', subjects: 'Mathematics', branch: 'KTM Main', status: 'active', initials: 'SS', color: 'primary' },
    { id: '2', name: 'Ramesh Rai', employee: 'EMP-002', designation: 'Science Teacher', subjects: 'Physics, Chemistry', branch: 'KTM Main', status: 'active', initials: 'RR', color: 'blue' },
    { id: '3', name: 'Kamala Tamang', employee: 'EMP-003', designation: 'Nepali Teacher', subjects: 'Nepali', branch: 'KTM Main', status: 'active', initials: 'KT', color: 'amber' },
  ],
  invoices: [
    { id: 'INV-2081-0001', student: 'Aarav Shrestha', amount: 12500, paid: 0, due: '30 Ashoj 2081', status: 'unpaid' },
    { id: 'INV-2081-0002', student: 'Sita Thapa', amount: 12500, paid: 12500, due: '30 Ashoj 2081', status: 'paid' },
    { id: 'INV-2081-0003', student: 'Bikash Karki', amount: 11000, paid: 5000, due: '30 Ashoj 2081', status: 'partial' },
  ],
  payments: [
    { id: 'TXN-20241015-001', student: 'Sita Thapa', amount: 12500, provider: 'khalti', status: 'success', date: '15 Ashoj 2081' },
    { id: 'TXN-20241015-002', student: 'Bikash Karki', amount: 5000, provider: 'esewa', status: 'success', date: '15 Ashoj 2081' },
    { id: 'TXN-20241015-003', student: 'Priya Gurung', amount: 12500, provider: 'connectips', status: 'pending', date: '15 Ashoj 2081' },
  ],
};