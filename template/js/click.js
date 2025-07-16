let hasData = true;
let currentPage = 1;
let rowsPerPage = 10;
// let filteredData = [];
let originalData = [];
let currentSort = { column: null, direction: null };

// Generate comprehensive fake data with additional properties for filtering
const allFakeData = [
    { date: '2025-07-01', impressions: 12543, clicks: 234, ctr: '1.87%', cpm: '$2.45', revenue: '$30.65', country: 'US', domain: 'example.com', placement: 'header' },
    { date: '2025-07-02', impressions: 15678, clicks: 312, ctr: '1.99%', cpm: '$2.78', revenue: '$43.58', country: 'UK', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-03', impressions: 9876, clicks: 187, ctr: '1.89%', cpm: '$2.12', revenue: '$20.94', country: 'DE', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-04', impressions: 18234, clicks: 398, ctr: '2.18%', cpm: '$3.01', revenue: '$54.88', country: 'FR', domain: 'example.com', placement: 'header' },
    { date: '2025-07-05', impressions: 11567, clicks: 245, ctr: '2.12%', cpm: '$2.67', revenue: '$30.86', country: 'US', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-06', impressions: 14523, clicks: 289, ctr: '1.99%', cpm: '$2.89', revenue: '$41.98', country: 'UK', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-07', impressions: 16789, clicks: 334, ctr: '1.99%', cpm: '$2.56', revenue: '$42.98', country: 'DE', domain: 'example.com', placement: 'header' },
    { date: '2025-07-08', impressions: 13456, clicks: 267, ctr: '1.98%', cpm: '$2.34', revenue: '$31.49', country: 'FR', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-09', impressions: 19876, clicks: 412, ctr: '2.07%', cpm: '$3.12', revenue: '$62.01', country: 'US', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-10', impressions: 12098, clicks: 241, ctr: '1.99%', cpm: '$2.67', revenue: '$32.30', country: 'UK', domain: 'example.com', placement: 'header' },
    { date: '2025-07-11', impressions: 17654, clicks: 356, ctr: '2.02%', cpm: '$2.98', revenue: '$52.61', country: 'DE', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-12', impressions: 14321, clicks: 278, ctr: '1.94%', cpm: '$2.45', revenue: '$35.09', country: 'FR', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-13', impressions: 16543, clicks: 329, ctr: '1.99%', cpm: '$2.78', revenue: '$45.99', country: 'US', domain: 'example.com', placement: 'header' },
    { date: '2025-07-14', impressions: 13789, clicks: 267, ctr: '1.94%', cpm: '$2.56', revenue: '$35.30', country: 'UK', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-15', impressions: 15432, clicks: 301, ctr: '1.95%', cpm: '$2.89', revenue: '$44.60', country: 'DE', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-16', impressions: 18765, clicks: 387, ctr: '2.06%', cpm: '$3.01', revenue: '$56.48', country: 'FR', domain: 'example.com', placement: 'header' },
    { date: '2025-07-17', impressions: 12876, clicks: 254, ctr: '1.97%', cpm: '$2.34', revenue: '$30.13', country: 'US', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-18', impressions: 16234, clicks: 318, ctr: '1.96%', cpm: '$2.67', revenue: '$43.34', country: 'UK', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-19', impressions: 14567, clicks: 289, ctr: '1.98%', cpm: '$2.45', revenue: '$35.69', country: 'DE', domain: 'example.com', placement: 'header' },
    { date: '2025-07-20', impressions: 17890, clicks: 356, ctr: '1.99%', cpm: '$2.89', revenue: '$51.72', country: 'FR', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-21', impressions: 13245, clicks: 267, ctr: '2.02%', cpm: '$2.56', revenue: '$33.91', country: 'US', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-22', impressions: 15678, clicks: 312, ctr: '1.99%', cpm: '$2.78', revenue: '$43.58', country: 'UK', domain: 'example.com', placement: 'header' },
    { date: '2025-07-23', impressions: 18432, clicks: 378, ctr: '2.05%', cpm: '$3.12', revenue: '$57.51', country: 'DE', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-24', impressions: 14789, clicks: 289, ctr: '1.95%', cpm: '$2.67', revenue: '$39.49', country: 'FR', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-25', impressions: 16543, clicks: 334, ctr: '2.02%', cpm: '$2.89', revenue: '$47.81', country: 'US', domain: 'example.com', placement: 'header' },
    { date: '2025-07-26', impressions: 12987, clicks: 254, ctr: '1.96%', cpm: '$2.34', revenue: '$30.39', country: 'UK', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-27', impressions: 17234, clicks: 345, ctr: '2.00%', cpm: '$2.98', revenue: '$51.36', country: 'DE', domain: 'demo.com', placement: 'footer' },
    { date: '2025-07-28', impressions: 15456, clicks: 301, ctr: '1.95%', cpm: '$2.56', revenue: '$39.57', country: 'FR', domain: 'example.com', placement: 'header' },
    { date: '2025-07-29', impressions: 18765, clicks: 387, ctr: '2.06%', cpm: '$3.01', revenue: '$56.48', country: 'US', domain: 'test.com', placement: 'sidebar' },
    { date: '2025-07-30', impressions: 13678, clicks: 267, ctr: '1.95%', cpm: '$2.45', revenue: '$33.51', country: 'UK', domain: 'demo.com', placement: 'footer' }
];

let filteredData = allFakeData;

function toggleData() {
    hasData = !hasData;
    if (hasData) {
        originalData = [...allFakeData];
        filteredData = [...allFakeData];
    } else {
        originalData = [];
        filteredData = [];
    }
    currentPage = 1;
    currentSort = { column: null, direction: null };
    updateSortHeaders();
    renderData();
}

function sortTable(column) {
    if (!hasData || filteredData.length === 0) {
        return;
    }

    // Determine sort direction
    let direction = 'asc';
    if (currentSort.column === column && currentSort.direction === 'asc') {
        direction = 'desc';
    }

    // Sort the data
    filteredData.sort((a, b) => {
        let valueA = a[column];
        let valueB = b[column];

        // Handle different data types
        switch (column) {
            case 'date':
                valueA = new Date(valueA);
                valueB = new Date(valueB);
                break;
            case 'impressions':
            case 'clicks':
                valueA = parseInt(valueA);
                valueB = parseInt(valueB);
                break;
            case 'ctr':
                valueA = parseFloat(valueA.replace('%', ''));
                valueB = parseFloat(valueB.replace('%', ''));
                break;
            case 'cpm':
            case 'revenue':
                valueA = parseFloat(valueA.replace('$', ''));
                valueB = parseFloat(valueB.replace('$', ''));
                break;
        }

        if (direction === 'asc') {
            return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
        } else {
            return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
        }
    });

    // Update current sort state
    currentSort = { column, direction };
    
    // Reset to first page
    currentPage = 1;
    
    // Update UI
    updateSortHeaders();
    // showSortStatus(column, direction);
    renderData();
}

function updateSortHeaders() {
    // Reset all headers
    document.querySelectorAll('.data-table th').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
    });

    // Update current sorted header
    if (currentSort.column) {
        const header = document.querySelector(`th[data-column="${currentSort.column}"]`);
        if (header) {
            header.classList.add(`sorted-${currentSort.direction}`);
        }
    }
}

function showSortStatus(column, direction) {
    const statusElement = document.getElementById('sortStatus');
    const columnNames = {
        'date': 'Date',
        'impressions': 'Impressions',
        'clicks': 'Clicks',
        'ctr': 'CTR',
        'cpm': 'CPM',
        'revenue': 'Revenue'
    };
    
    const directionText = direction === 'asc' ? 'ascending' : 'descending';
    statusElement.textContent = `Sorted by ${columnNames[column]} (${directionText})`;
    statusElement.style.display = 'block';

    // Hide after 3 seconds
    setTimeout(() => {
        statusElement.style.display = 'none';
    }, 3000);
}

function applyFilters() {
    if (!hasData) {
        showFilterStatus('No data available to filter', 'warning');
        return;
    }

    // Show loading state
    const dataSection = document.getElementById('dataSection');
    dataSection.classList.add('loading');

    // Simulate loading delay
    setTimeout(() => {
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;
        const country = document.getElementById('countryFilter').value;
        const domain = document.getElementById('domainFilter').value;
        const placement = document.getElementById('placementFilter').value;

        // Filter the data
        filteredData = originalData.filter(item => {
            let matchesFilters = true;

            // Date range filter
            if (startDate && item.date < startDate) matchesFilters = false;
            if (endDate && item.date > endDate) matchesFilters = false;

            // Country filter
            if (country && item.country !== country) matchesFilters = false;

            // Domain filter
            if (domain && item.domain !== domain) matchesFilters = false;

            // Placement filter
            if (placement && item.placement !== placement) matchesFilters = false;

            return matchesFilters;
        });

        // Re-apply current sort if exists
        if (currentSort.column) {
            sortTable(currentSort.column);
            return; // sortTable will handle rendering
        }

        currentPage = 1; // Reset to first page
        dataSection.classList.remove('loading');
        renderData();

        // Show filter status
        const activeFilters = [];
        if (startDate || endDate) activeFilters.push(`Date: ${startDate || 'start'} to ${endDate || 'end'}`);
        if (country) activeFilters.push(`Country: ${getCountryName(country)}`);
        if (domain) activeFilters.push(`Domain: ${domain}`);
        if (placement) activeFilters.push(`Placement: ${placement}`);

        if (activeFilters.length > 0) {
            showFilterStatus(`Filters applied: ${activeFilters.join(', ')} | Found ${filteredData.length} results`, 'success');
        } else {
            showFilterStatus('No filters applied - showing all data', 'info');
        }
    }, 500);
}

function resetFilters() {
    // Show loading state
    const dataSection = document.getElementById('dataSection');
    dataSection.classList.add('loading');

    // Simulate loading delay
    setTimeout(() => {
        // Reset all filter inputs
        document.getElementById('startDate').value = '2025-07-01';
        document.getElementById('endDate').value = '2025-07-30';
        document.getElementById('countryFilter').selectedIndex = 0;
        document.getElementById('domainFilter').selectedIndex = 0;
        document.getElementById('placementFilter').selectedIndex = 0;

        // Reset data and sort
        if (hasData) {
            filteredData = [...originalData];
        } else {
            filteredData = [];
        }

        currentPage = 1; // Reset to first page
        currentSort = { column: null, direction: null }; // Reset sort
        updateSortHeaders();
        dataSection.classList.remove('loading');
        renderData();

        showFilterStatus('All filters have been reset - showing original data', 'info');
    }, 300);
}

function showFilterStatus(message, type) {
    const statusElement = document.getElementById('filterStatus');
    statusElement.textContent = message;
    statusElement.style.display = 'block';
    
    // Update styling based on type
    statusElement.className = 'filter-status';
    if (type === 'warning') {
        statusElement.style.background = '#fef3c7';
        statusElement.style.borderColor = '#fbbf24';
        statusElement.style.color = '#92400e';
    } else if (type === 'success') {
        statusElement.style.background = '#dcfce7';
        statusElement.style.borderColor = '#86efac';
        statusElement.style.color = '#166534';
    } else {
        statusElement.style.background = '#f0f9ff';
        statusElement.style.borderColor = '#bae6fd';
        statusElement.style.color = '#0369a1';
    }

    // Hide after 5 seconds
    setTimeout(() => {
        statusElement.style.display = 'none';
    }, 5000);
}

function getCountryName(code) {
    const countries = {
        'US': 'United States',
        'UK': 'United Kingdom',
        'DE': 'Germany',
        'FR': 'France'
    };
    return countries[code] || code;
}

function renderData() {
    const tableBody = document.getElementById('dataTableBody');
    const noDataMessage = document.getElementById('noDataMessage');
    const paginationInfo = document.getElementById('paginationInfo');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (hasData && filteredData.length > 0) {
        // Calculate pagination
        const totalItems = filteredData.length;
        const totalPages = Math.ceil(totalItems / rowsPerPage);
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = Math.min(startIndex + rowsPerPage, totalItems);
        const currentData = filteredData.slice(startIndex, endIndex);

        // Show data
        tableBody.innerHTML = currentData.map(row => `
            <tr>
                <td>${row.date}</td>
                <td>${row.impressions.toLocaleString()}</td>
                <td>${row.clicks}</td>
                <td>${row.ctr}</td>
                <td>${row.cpm}</td>
                <td>${row.revenue}</td>
            </tr>
        `).join('');
        
        noDataMessage.style.display = 'none';
        
        // Update pagination info
        const displayStart = startIndex + 1;
        const displayEnd = endIndex;
        paginationInfo.textContent = `${displayStart}–${displayEnd} of ${totalItems}`;
        
        // Update pagination buttons
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
        
    } else {
        // Show no data
        tableBody.innerHTML = '';
        noDataMessage.style.display = 'block';
        paginationInfo.textContent = '0–0 of 0';
        prevBtn.disabled = true;
        nextBtn.disabled = true;
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        renderData();
    }
}

function nextPage() {
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderData();
    }
}

function changeRowsPerPage() {
    const select = document.getElementById('rowsPerPage');
    rowsPerPage = parseInt(select.value);
    currentPage = 1; // Reset to first page when changing rows per page
    renderData();
}

function setActiveTab(tab) {
    document.querySelectorAll('.group-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
}

function exportCSV() {
    if (!hasData || filteredData.length === 0) {
        alert('No data to export');
        return;
    }
    
    // Create CSV content
    const headers = ['Date', 'Impressions', 'Clicks', 'CTR', 'CPM', 'Revenue'];
    const csvContent = [
        headers.join(','),
        ...filteredData.map(row => [
            row.date,
            row.impressions,
            row.clicks,
            row.ctr,
            row.cpm,
            row.revenue
        ].join(','))
    ].join('\n');

    // Download CSV
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `analytics-data-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Initialize with no data
renderData();