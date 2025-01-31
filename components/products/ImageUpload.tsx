"use client"

import { CldUploadWidget } from 'next-cloudinary'
import Image from 'next/image'
import { useState } from 'react'
import { TbPhotoPlus } from 'react-icons/tb'

export default function ImageUpload() {

    const [imageUrl, setImageUrl] = useState('')

    return (
        <CldUploadWidget
            onSuccess={(result, { widget }) => {
                if (result.event === 'success') {
                    widget.close()
                    // @ts-expect-error: Ignorar el error por types
                    setImageUrl(result.info.secure_url)
                }
            }}
            uploadPreset="Quiosco"
            onUpload={(error, result) => {
                if (error) {
                    console.error("Error uploading image:", error);
                } else {
                    console.log("Image uploaded:", result);
                }
            }}
            options={{
                maxFiles: 1
            }}
        >
            {({ open }) => (
                <>
                    <div
                        className='space-y-2'
                    >
                        <label className='text-slate-800'>Imagen Producto</label>
                        <div
                            className='relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600 bg-slate-100'
                            onClick={() => open()}
                        >
                            <TbPhotoPlus
                                size={50}
                            />
                            <p className='text-lg font-semibold'>Agregar imagen</p>
                            {imageUrl && (
                                <div
                                    className='absolute inset-0 w-full h-full'
                                >
                                    <Image
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        src={imageUrl}
                                        alt='Imagen Producto'
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                    <input type="hidden" name='image' value={imageUrl} />
                </>
            )}
        </CldUploadWidget>
    )
}
