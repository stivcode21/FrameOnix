import React from "react";

const GaleryBlog = () => {
    return (
        <div className="min-h-screen bg-gray-700 flex flex-col items-center justify-center">

            <div className="onixContainer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-40">
                {/* Primer bloque grande (2 columnas x 2 filas) */}
                <div className="col-span-2 sm:col-span-1 lg:col-span-2 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 1"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Segundo bloque (1 columna x 1 fila) */}
                <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 2"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Tercer bloque (2 columnas x 1 fila) */}
                <div className="col-span-2 sm:col-span-1 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 3"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Cuarto bloque (1 columna x 1 fila) */}
                <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 4"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Quinto bloque grande (2 columnas x 2 filas) */}
                <div className="col-span-2 sm:col-span-1 lg:col-span-3 bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 5"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Sexto bloque (1 columna x 1 fila) */}
                <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <img
                        src="/previuImg-3.png"
                        alt="Gallery Item 6"
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default GaleryBlog;
