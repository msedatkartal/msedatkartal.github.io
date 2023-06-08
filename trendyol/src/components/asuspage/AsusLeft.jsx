import React from 'react'
import AsusLeftTop from './AsusLeftTop'
import AsusLeftRight from './AsusLeftRight'
function AsusLeft() {
    return (
        <>
            <div className="asus-left-con">
                <div className="asus-left-fluit">
                    <AsusLeftTop/>
                    <AsusLeftRight/>
                </div>
            </div>
        </>
    )
}

export default AsusLeft