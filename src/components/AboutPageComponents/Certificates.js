import React from 'react'

function Certificates({ certificates }) {
    let myCertificates = certificates.filter(data => data.id != 6)
    return (
        <div  className="grid_certificates">
            {
                myCertificates.map((data, i) => {
                    return (
                        <div className="certificate_card" key={i}>
                            <img src={data.image_full_url} alt="" />
                        </div>
                    )
                })
            }


        </div>
    )
}

export default Certificates