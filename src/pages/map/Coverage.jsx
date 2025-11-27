import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const Coverage = () => {
    const position = [23.6850, 90.3563]
    return (
        <main className='bg-base-100 my-10 p-4 rounded-xl'>
            <div>
                <h2 className='text-2xl font-semibold text-secondary'>
                    Search our warehouse
                </h2>
            </div>
            <div className='border w-full h-[800px] rounded-xl overflow-hidden'>
                <MapContainer className='w-full h-full' center={position} zoom={8} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </main>
    );
};

export default Coverage;