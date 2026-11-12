// --- Dữ liệu xe yêu thích mẫu ---
let carsData = {
    'xe-may': [
        {
            id: 1,
            name: 'HONDA VISION 2024',
            transmission: 'Xe tay ga',
            seats: '2 chỗ',
            fuel: 'Xăng',
            rating: 5.0,
            trips: 1,
            location: 'Khu đô thị Văn Quán, Hà Đông',
            price: '150K',
            period: '/ngày',
            owner: 'Hoàng Long',
            ownerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120',
            image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&q=80&w=600',
            tags: ['Miễn thế chấp']
        },
        {
            id: 2,
            name: 'YAMAHA JANUS 2023',
            transmission: 'Xe tay ga',
            seats: '2 chỗ',
            fuel: 'Xăng',
            rating: 4.9,
            trips: 12,
            location: 'Mỹ Đình, Nam Từ Liêm',
            price: '130K',
            period: '/ngày',
            owner: 'Minh Thư',
            ownerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120',
            image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=600',
            tags: ['Miễn thế chấp', 'Giao xe tận nơi']
        }
    ],
    'o-to': [
        {
            id: 3,
            name: 'HYUNDAI SANTAFE 2024',
            transmission: 'Số tự động',
            seats: '7 chỗ',
            fuel: 'Dầu',
            rating: 5.0,
            trips: 40,
            location: 'Phố Huế, Hoàn Kiếm, Hà Nội',
            price: '1.350K',
            period: '/ngày',
            owner: 'Đức Mạnh',
            ownerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=120',
            image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600',
            tags: ['Có tài xế chuyên nghiệp']
        }
    ]
};

let currentTab = 'xe-may';

// Hàm hiển thị danh sách xe
function renderCars() {
    const container = document.getElementById('cars-container');
    const countXeMay = document.getElementById('count-xe-may');
    const countOTo = document.getElementById('count-o-to');

    // Cập nhật số lượng đếm trên tab an toàn
    if (countXeMay && carsData['xe-may']) countXeMay.innerText = carsData['xe-may'].length;
    if (countOTo && carsData['o-to']) countOTo.innerText = carsData['o-to'].length;

    if (!container) return;
    const items = carsData[currentTab] || [];

    if (items.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #64748b; background: #f8fafc; border-radius: 8px; border: 1px dashed #cbd5e1;">
                <p>Chưa có chiếc xe nào trong danh sách yêu thích này.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = items.map(car => `
        <div class="car-card">
            <!-- Hình ảnh và nhãn -->
            <div class="car-image-box">
                <img src="${car.image}" alt="${car.name}">
                <div class="car-tags">
                    ${car.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <button onclick="removeCar('${currentTab}', ${car.id})" class="card-heart-btn" title="Bỏ thích">
                    <i class="fa-solid fa-heart"></i>
                </button>
            </div>

            <!-- Thông tin xe -->
            <div class="car-details">
                <div>
                    <h3 class="car-title">${car.name}</h3>
                    <div class="car-specs">
                        <span><i class="fa-solid fa-gear"></i> ${car.transmission}</span>
                        <span><i class="fa-solid fa-user-group"></i> ${car.seats}</span>
                        <span><i class="fa-solid fa-gas-pump"></i> ${car.fuel}</span>
                    </div>
                    <div class="car-rating">
                        <i class="fa-solid fa-star"></i> ${car.rating} <span>(${car.trips} chuyến)</span>
                    </div>
                    <div class="car-location">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>${car.location}</span>
                    </div>
                </div>

                <div class="car-footer">
                    <div class="owner-info">
                        <img src="${car.ownerAvatar}" alt="${car.owner}" class="owner-avatar">
                        <span class="owner-name-text">${car.owner}</span>
                    </div>
                    <div class="car-price">
                        <span class="price-num">${car.price}</span>
                        <span class="price-unit">${car.period}</span>
                    </div>
                </div>
            </div>

            <!-- Nút thao tác -->
            <div class="car-actions">
                <button onclick="removeCar('${currentTab}', ${car.id})" class="btn-action btn-remove">Bỏ thích</button>
                <button class="btn-action btn-detail">Xem chi tiết</button>
            </div>
        </div>
    `).join('');
}

// Chuyển đổi tab
function switchTab(tab) {
    currentTab = tab;
    const tabTuLai = document.getElementById('tab-xe-may');
    const tabCoTaiXe = document.getElementById('tab-o-to');

    if (tab === 'xe-may') {
        tabTuLai.classList.add('active');
        tabCoTaiXe.classList.remove('active');
    } else {
        tabCoTaiXe.classList.add('active');
        tabTuLai.classList.remove('active');
    }
    renderCars();
}

// Xóa xe khỏi danh sách
function removeCar(tab, id) {
    carsData[tab] = carsData[tab].filter(car => car.id !== id);
    renderCars();
}

// Hàm thông báo đã được tắt theo yêu cầu
function showToast() { }

// --- Quản lý hiển thị các View trong Tài khoản của tôi ---

// Ẩn tất cả các view chức năng
function hideAllAccountViews() {
    const viewIds = ['view-blank', 'view-profile', 'view-orders', 'view-favorites', 'view-reviews'];
    viewIds.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.style.display = 'none';
        }
    });
}

// Bấm vào Tài khoản Vũ Đức -> Hiện 1 khoảng trắng và chờ người dùng chọn chức năng
function showBlankAccountView() {
    hideAllAccountViews();

    const blankView = document.getElementById('view-blank');
    if (blankView) {
        blankView.style.display = 'flex';
    }

    // Bỏ trạng thái active của tất cả các mục chức năng
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => item.classList.remove('active'));

    // Đặt lại text của ô chọn trên mobile
    const selectText = document.getElementById('accountSelectText');
    if (selectText) {
        selectText.innerText = 'Tài khoản của tôi';
    }

    closeAccountDropdown();
    closeNavPopup();

    // Trên mobile, cuộn nhẹ đến danh mục Tài khoản của tôi
    const accountSidebar = document.getElementById('accountSidebar');
    if (window.innerWidth <= 1024 && accountSidebar) {
        accountSidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Chuyển đổi và hiển thị chức năng cụ thể khi được người dùng chọn
function switchAccountView(itemName) {
    hideAllAccountViews();

    let targetViewId = 'view-favorites';
    let titleName = 'Danh sách của tôi';

    if (itemName === 'Hồ sơ của tôi') {
        targetViewId = 'view-profile';
        titleName = 'Hồ sơ của tôi';
    } else if (itemName === 'Đơn thuê của tôi') {
        targetViewId = 'view-orders';
        titleName = 'Đơn thuê của tôi';
    } else if (itemName === 'Danh sách của tôi' || itemName === 'Danh sách yêu thích') {
        targetViewId = 'view-favorites';
        titleName = 'Danh sách của tôi';
        renderCars();
    } else if (itemName === 'Đánh giá của tôi') {
        targetViewId = 'view-reviews';
        titleName = 'Đánh giá của tôi';
    }

    const targetEl = document.getElementById(targetViewId);
    if (targetEl) {
        targetEl.style.display = 'block';
    }

    // Cập nhật text ô chọn trên mobile
    const selectText = document.getElementById('accountSelectText');
    if (selectText) {
        selectText.innerText = titleName;
    }

    closeAccountDropdown();
}

// Lưu thông tin hồ sơ
function saveProfile(event) {
    if (event) event.preventDefault();
    const nameInput = document.getElementById('profileNameInput');
    if (nameInput && nameInput.value.trim()) {
        const newName = nameInput.value.trim();
        document.querySelectorAll('.user-name, .popup-name').forEach(el => {
            el.innerText = newName;
        });
    }
}

// Bộ lọc đơn thuê xe
function filterOrders(status, btn) {
    const tabs = document.querySelectorAll('.order-tabs .tab-btn');
    tabs.forEach(t => t.classList.remove('active'));
    if (btn) btn.classList.add('active');

    const orders = document.querySelectorAll('.order-card');
    orders.forEach(card => {
        if (status === 'all') {
            card.style.display = 'flex';
        } else if (status === 'active') {
            const hasActive = card.querySelector('.order-badge.active');
            card.style.display = hasActive ? 'flex' : 'none';
        } else if (status === 'completed') {
            const hasCompleted = card.querySelector('.order-badge.completed');
            card.style.display = hasCompleted ? 'flex' : 'none';
        }
    });
}

// --- Quản lý Popup Menu Mobile / iPad ---
function openNavPopup() {
    const popup = document.getElementById('navPopup');
    const overlay = document.getElementById('navPopupOverlay');
    if (popup && overlay) {
        popup.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeNavPopup() {
    const popup = document.getElementById('navPopup');
    const overlay = document.getElementById('navPopupOverlay');
    if (popup && overlay) {
        popup.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    }
}

// --- Quản lý Ô nhỏ chọn Tài khoản của tôi ---
function toggleAccountDropdown(event) {
    if (event) event.stopPropagation();
    const sidebar = document.getElementById('accountSidebar');
    const btn = document.getElementById('accountSelectBtn');
    if (sidebar) {
        const isOpen = sidebar.classList.toggle('open');
        if (btn) {
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        }
    }
}

function closeAccountDropdown() {
    const sidebar = document.getElementById('accountSidebar');
    const btn = document.getElementById('accountSelectBtn');
    if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        if (btn) {
            btn.setAttribute('aria-expanded', 'false');
        }
    }
}

// Khởi tạo các sự kiện điều hướng & dropdown
function initNavigationEvents() {
    // Nút Tài khoản Vũ Đức trên header -> ra khoảng trắng
    const userProfileBtn = document.getElementById('userProfileBtn');
    if (userProfileBtn) {
        userProfileBtn.addEventListener('click', showBlankAccountView);
    }

    // Nút Tài khoản Vũ Đức trong popup menu mobile
    const popupUserProfileBtn = document.getElementById('popupUserProfileBtn');
    if (popupUserProfileBtn) {
        popupUserProfileBtn.addEventListener('click', showBlankAccountView);
    }

    // Nút 3 gạch mở popup menu
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    if (hamburgerBtn) {
        hamburgerBtn.addEventListener('click', openNavPopup);
    }

    // Nút đóng popup & lớp phủ overlay
    const popupCloseBtn = document.getElementById('popupCloseBtn');
    if (popupCloseBtn) {
        popupCloseBtn.addEventListener('click', closeNavPopup);
    }

    const navPopupOverlay = document.getElementById('navPopupOverlay');
    if (navPopupOverlay) {
        navPopupOverlay.addEventListener('click', closeNavPopup);
    }

    // Nút bấm "Tài khoản của tôi" (ô nhỏ trên mobile/ipad)
    const accountSelectBtn = document.getElementById('accountSelectBtn');
    if (accountSelectBtn) {
        accountSelectBtn.addEventListener('click', toggleAccountDropdown);
        // Hỗ trợ bấm phím Enter hoặc Space
        accountSelectBtn.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccountDropdown(e);
            }
        });
    }

    // Các mục con trong menu tài khoản (Hồ sơ, Đơn thuê, Danh sách, Đánh giá)
    const sidebarItems = document.querySelectorAll('.sidebar-item');
    sidebarItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const itemName = this.getAttribute('data-name') || this.innerText.trim();

            sidebarItems.forEach(si => si.classList.remove('active'));
            this.classList.add('active');

            // Hiển thị chức năng tương ứng
            switchAccountView(itemName);
        });
    });

    // Quản lý chuyển tab active trên navbar desktop giống trang chủ gốc
    const desktopNavLinks = document.querySelectorAll('.nav-list li a');
    desktopNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            desktopNavLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Nút chuông thông báo trên header
    const bellBtn = document.getElementById('bellBtn');
    if (bellBtn) {
        bellBtn.addEventListener('click', () => {
            // Đã tắt thông báo theo yêu cầu
        });
    }

    // Click bên ngoài thì tự đóng dropdown tài khoản
    document.addEventListener('click', function (e) {
        const sidebar = document.getElementById('accountSidebar');
        if (sidebar && !sidebar.contains(e.target)) {
            closeAccountDropdown();
        }
    });

    // Bấm ESC đóng popup và dropdown
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeNavPopup();
            closeAccountDropdown();
        }
    });
}

// Khởi chạy khi tải trang
window.onload = function () {
    renderCars();
    initNavigationEvents();
};