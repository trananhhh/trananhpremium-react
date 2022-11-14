const data = [
    { title: 'Giới thiệu', icon: 'fa-house', section: 'welcome' },
    { title: 'Sản phẩm', icon: 'fa-cart-shopping', section: 'products' },
    { title: 'Thành viên', icon: ' fa-user', section: 'section4' },
    { title: 'Cam kết', icon: 'fa-shield', section: 'section6' },
];

function NavBar() {
    return (
        <div
            id="navbar"
            className="fixed h-32 md:top-0 bottom-0 inset-x-4 mx-auto items-center justify-center z-10 transition-all flex"
        >
            <div className="center rounded-full bg-white p-3 shadow-lg flex">
                {data.map((item) => (
                    <a
                        className="font-sans flex text-gray-600 font-semibold  text-md hover:bg-[#e5e7eb] hover:[#64748b] px-[16px] md:px-[12px] py-[12px] md:py-2 rounded-full transition"
                        href={`#${item.section}`}
                    >
                        <i
                            className={
                                'fa-solid text-2xl md:text-base ' + item.icon
                            }
                        ></i>
                        <span className="hidden md:inline-block ml-2">
                            {item.title}
                        </span>
                    </a>
                ))}
                <span className=" font-sans flex bg-red-600 text-white font-semibold px-[16px] py-[12px] md:py-2 rounded-full transition shadow-lg ml-2">
                    <i className="fa-solid text-2xl md:text-base fa-phone"></i>
                    <span className="hidden md:inline-block ml-2">Liên hệ</span>
                </span>
            </div>
        </div>
        // https://relatablecode.com/how-to-make-a-navbar-with-react-scroll
    );
}

export default NavBar;
