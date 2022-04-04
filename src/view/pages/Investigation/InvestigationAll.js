import React from 'react'

export default function InvestigationAll() {
  return (
    <div>
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
                        <small class="text-muted fs-7 fw-bold my-1 ms-1">List Of Investigatio</small>
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
                        <h5>Investigation All--</h5>
                    </div>
                    {/*end::Col*/}
                </div>
                {/*end::Row*/}

            </div>
            {/*end::Container*/}
        </div>
        {/*end::Post*/}
    </div>
  )
}
