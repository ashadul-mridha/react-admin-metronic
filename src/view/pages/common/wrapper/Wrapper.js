import React from 'react';

const Wrapper = () => {
    return (
        <>
            {/*begin::Wrapper*/}
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                {/*begin::Header*/}
                <div id="kt_header" class="header align-items-stretch">
                    {/*begin::Container*/}
                    <div class="container-fluid d-flex align-items-stretch justify-content-between">
                        {/*begin::Aside mobile toggle*/}
                        <div class="d-flex align-items-center d-lg-none ms-n2 me-2" title="Show aside menu">
                            <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                                id="kt_aside_mobile_toggle">
                                {/*begin::Svg Icon | path: icons/duotune/abstract/abs015.svg*/}
                                <span class="svg-icon svg-icon-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                                            fill="black" />
                                        <path opacity="0.3"
                                            d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                                            fill="black" />
                                    </svg>
                                </span>
                                {/*end::Svg Icon*/}
                            </div>
                        </div>
                        {/*end::Aside mobile toggle*/}
                        {/*begin::Mobile logo*/}
                        <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
                            <a href="../../demo1/dist/index.html" class="d-lg-none">
                                <img alt="Logo" src="assets/media/logos/logo-2.svg" class="h-30px" />
                            </a>
                        </div>
                        {/*end::Mobile logo*/}
                        {/*begin::Wrapper*/}
                        <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
                            {/*begin::Navbar*/}
                            <div class="d-flex align-items-stretch" id="kt_header_nav">
                                {/*begin::Menu wrapper*/}
                                <div class="header-menu align-items-stretch" data-kt-drawer="true" data-kt-drawer-name="header-menu"
                                    data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true"
                                    data-kt-drawer-width="{default:'200px', '300px': '250px'}" data-kt-drawer-direction="end"
                                    data-kt-drawer-toggle="#kt_header_menu_mobile_toggle" data-kt-swapper="true"
                                    data-kt-swapper-mode="prepend"
                                    data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}">
                                    {/*begin::Menu*/}
                                    <div class="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch"
                                        id="#kt_header_menu" data-kt-menu="true">
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item here show menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Dashboards</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Crafted</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Apps</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Layouts</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Resources</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                        <div data-kt-menu-trigger="click" data-kt-menu-placement="bottom-start"
                                            class="menu-item menu-lg-down-accordion me-lg-1">
                                            <span class="menu-link py-3">
                                                <span class="menu-title">Mega Menu</span>
                                                <span class="menu-arrow d-lg-none"></span>
                                            </span>
                                        </div>
                                    </div>
                                    {/*end::Menu*/}
                                </div>
                                {/*end::Menu wrapper*/}
                            </div>
                            {/*end::Navbar*/}
                            {/*begin::Toolbar wrapper*/}
                            <div class="d-flex align-items-stretch flex-shrink-0">
                            
                                {/*begin::User menu*/}
                                <div class="d-flex align-items-center ms-1 ms-lg-3" id="kt_header_user_menu_toggle">
                                    {/*begin::Menu wrapper*/}
                                    <div class="cursor-pointer symbol symbol-30px symbol-md-40px" data-kt-menu-trigger="click"
                                        data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end">
                                        <img src="assets/media/avatars/300-1.jpg" alt="user" />
                                    </div>
                                    {/*begin::User account menu*/}
                                    <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                                        data-kt-menu="true">
                                        {/*begin::Menu item*/}
                                        <div class="menu-item px-3">
                                            <div class="menu-content d-flex align-items-center px-3">
                                                {/*begin::Avatar*/}
                                                <div class="symbol symbol-50px me-5">
                                                    <img alt="Logo" src="assets/media/avatars/300-1.jpg" />
                                                </div>
                                                {/*end::Avatar*/}
                                                {/*begin::Username*/}
                                                <div class="d-flex flex-column">
                                                    <div class="fw-bolder d-flex align-items-center fs-5">Max Smith
                                                        <span
                                                            class="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">Pro</span>
                                                    </div>
                                                    <a href="#" class="fw-bold text-muted text-hover-primary fs-7">max@kt.com</a>
                                                </div>
                                                {/*end::Username*/}
                                            </div>
                                        </div>
                                        {/*end::Menu item*/}
                                        {/*begin::Menu separator*/}
                                        <div class="separator my-2"></div>
                                        {/*end::Menu separator*/}                            
                                    </div>
                                    {/*end::User account menu*/}
                                    {/*end::Menu wrapper*/}
                                </div>
                                {/*end::User menu*/}
                                {/*begin::Header menu toggle*/}
                                <div class="d-flex align-items-center d-lg-none ms-2 me-n3" title="Show header menu">
                                    <div class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
                                        id="kt_header_menu_mobile_toggle">
                                        {/*begin::Svg Icon | path: icons/duotune/text/txt001.svg*/}
                                        <span class="svg-icon svg-icon-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                                fill="none">
                                                <path
                                                    d="M13 11H3C2.4 11 2 10.6 2 10V9C2 8.4 2.4 8 3 8H13C13.6 8 14 8.4 14 9V10C14 10.6 13.6 11 13 11ZM22 5V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4V5C2 5.6 2.4 6 3 6H21C21.6 6 22 5.6 22 5Z"
                                                    fill="black" />
                                                <path opacity="0.3"
                                                    d="M21 16H3C2.4 16 2 15.6 2 15V14C2 13.4 2.4 13 3 13H21C21.6 13 22 13.4 22 14V15C22 15.6 21.6 16 21 16ZM14 20V19C14 18.4 13.6 18 13 18H3C2.4 18 2 18.4 2 19V20C2 20.6 2.4 21 3 21H13C13.6 21 14 20.6 14 20Z"
                                                    fill="black" />
                                            </svg>
                                        </span>
                                        {/*end::Svg Icon*/}
                                    </div>
                                </div>
                                {/*end::Header menu toggle*/}
                            </div>
                            {/*end::Toolbar wrapper*/}
                        </div>
                        {/*end::Wrapper*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Header*/}
                {/*begin::Content*/}
                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    {/*begin::Toolbar*/}
                    <div class="toolbar" id="kt_toolbar">
                        {/*begin::Container*/}
                        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
                            {/*begin::Page title*/}
                            <div data-kt-swapper="true" data-kt-swapper-mode="prepend"
                                data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
                                class="page-title d-flex align-items-center flex-wrap me-3 mb-5 mb-lg-0">
                                {/*begin::Title*/}
                                <h1 class="d-flex align-items-center text-dark fw-bolder fs-3 my-1">Dashboard
                                    {/*begin::Separator*/}
                                    <span class="h-20px border-gray-200 border-start ms-3 mx-2"></span>
                                    {/*end::Separator*/}
                                    {/*begin::Description*/}
                                    <small class="text-muted fs-7 fw-bold my-1 ms-1">#XRS-45670</small>
                                    {/*end::Description*/}
                                </h1>
                                {/*end::Title*/}
                            </div>
                            {/*end::Page title*/}
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/*end::Toolbar*/}
                    {/*begin::Post*/}
                    <div class="post d-flex flex-column-fluid" id="kt_post">
                        {/*begin::Container*/}
                        <div id="kt_content_container" class="container-xxl">
                            {/*begin::Row*/}
                            <div class="row gy-5 g-xl-8">
                                {/*begin::Col*/}
                                <div class="col-xl-4">
                                    <h5>Content--</h5>
                                </div>
                                {/*end::Col*/}
                            </div>
                            {/*end::Row*/}
                            
                        </div>
                        {/*end::Container*/}
                    </div>
                    {/*end::Post*/}
                </div>
                {/*end::Content*/}
                {/*begin::Footer*/}
                <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
                    {/*begin::Container*/}
                    <div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
                        {/*begin::Copyright*/}
                        <div class="text-dark order-2 order-md-1">
                            <span class="text-muted fw-bold me-1">2022©</span>
                            <a href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">Keenthemes</a>
                        </div>
                        {/*end::Copyright*/}
                        {/*begin::Menu*/}
                        <ul class="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                            <li class="menu-item">
                                <a href="https://keenthemes.com" target="_blank" class="menu-link px-2">About</a>
                            </li>
                            <li class="menu-item">
                                <a href="https://devs.keenthemes.com" target="_blank" class="menu-link px-2">Support</a>
                            </li>
                            <li class="menu-item">
                                <a href="https://1.envato.market/EA4JP" target="_blank" class="menu-link px-2">Purchase</a>
                            </li>
                        </ul>
                        {/*end::Menu*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Footer*/}
            </div>
            {/*end::Wrapper*/}
        </>
    );
};

export default Wrapper;