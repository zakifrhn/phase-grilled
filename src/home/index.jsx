import React from 'react'
import Select from 'react-select'
import { PRODUCTS} from '../product/product';


function Home() {
    //console.log(Product)

  return (
    <div>
        <div className='flex flex-col-reverse md:grid md:grid-cols-6 p-5 border gap-y-5 md:gap-x-5 border-black'>

            <div className='product md:grid md:col-start-1 md:col-span-4 md'>
                <div className='flex flex-wrap justify-between gap-y-5'>
                    {
                        PRODUCTS ? (
                            PRODUCTS.map((v)=>{
                                return(
                                    <div>
                                        <div key={v.id} className='border border-gray-500 rounded-md p-5 max-h-fit w-28 text-center'>
                                            <img src={v.picture} alt='' className='h-[80px] mx-auto'/>

                                            <p>{v.name}</p>
                                            <p>{v.price}</p>
                                        </div>
                                    </div>
                                )
                            })
                        ):(
                            <div>
                                <h1>Data Not Found</h1>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='user md:grid md:col-start-5 md:col-span-6'>
                <div>
                    <Select
                    className="basic-single"
                    classNamePrefix="select"
                    name="color"
                    options=""
                    placeholder="Select users"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home