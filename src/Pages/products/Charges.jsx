import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentJoinIcon from '../../assets/DocumentJoinIcon.svg?react';
import EraserIcon from '../../assets/eraserIcon.svg?react';
import RefreshIcon from '../../assets/refreshIcon.svg?react';
import PDFIcon from '../../assets/pdfIcon.svg?react';
import ExcelIcon from '../../assets/fileExcelIcon.svg?react';
import PlusIcon from '../../assets/plusIcon.svg?react';
import SearchIcon from '../../assets/searchIcon.svg?react';

const initialDischargesData = [
    { id: 1, date: '2023-07-01', time: "20:56 PM", reason: '	1010- CLIENTE CACANCELA CON YAPE SE ENTREGA BOLETA MASCOTA INTERNA OSLO HC 30283', responsible: 'Juan Pérez', registeredBy: 'Juan Pérez' },
    { id: 2, date: '2023-07-01', time: "20:56 PM", reason: 'Descarga de caja', responsible: 'Juan Pérez', registeredBy: 'Juan Pérez' },
    { id: 3, date: '2023-07-01', time: "20:56 PM", reason: 'Descarga de caja', responsible: 'Juan Pérez', registeredBy: 'Juan Pérez' },
];

const IconsOptions = [
    { icon: EraserIcon, color: "text-gray-700" },
    { icon: RefreshIcon, color: "text-gray-700" },
    { icon: PDFIcon, color: "text-orange-500" },
    { icon: ExcelIcon, color: "text-green-600" },
];


const tableHeaders = ["N°", "Fecha de creación", "Razon", "Responsable", "Registrado por ", "Opciones"];

function Charges() {
    const [discharges, setDischarges] = useState(initialDischargesData);

    const navigate = useNavigate();

    return (
        <section className="container mx-auto p-6">
            <h1 className="text-2xl items-center font-medium text-green-500 mb-4 pb-4 border-b-2 border-gray-100 flex">
                <DocumentJoinIcon className="w-9 h-9 mr-2" />
                Cargas de stock
            </h1>

            <div className='flex gap-2 px-4 border-b-2 border-gray-200 mb-4'>
                <button className='bg-blue-400 text-white rounded-lg px-4 py-2 mb-4'>Cargas Emitidas</button>
                <button className='text-blue-400 rounded-lg px-4 py-2 mb-4 hover:bg-gray-50 hover:text-blue-500'>Por Items</button>
            </div>

            <div className="bg-white rounded-lg shadow p-3 mb-6">
                <div className="p-4 rounded-lg mb-2">
                    <div className="flex items-center space-x-2 mb-4">
                        <div className="w-[60%] flex gap-2">
                            <div className="flex w-[50%] border-gray-200 border rounded-lg overflow-hidden hover:border-blue-300 focus-within:border-blue-300">
                                <div className="flex items-center justify-center bg-gray-100 px-3">
                                    <SearchIcon className="w-5 h-5 text-gray-600" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar..."
                                    className="w-[40%] py-2 px-4 focus:outline-none focus:ring-0 focus:border-transparent"
                                />
                            </div>
                            <input
                                type="date"
                                className="w-[50%] py-2 px-4 border-gray-200 border-2 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div>
                            {IconsOptions.map((option, index) => (
                                <button key={index} className={`bg-transparent border border-gray-300 ${option.color} py-2 px-4 rounded hover:bg-gray-200`}>
                                    <option.icon className="w-5 h-5" />
                                </button>
                            ))}
                        </div>
                        <button
                            className="border border-gray-300 text-white bg-green-500 py-2 px-4 rounded hover:bg-green-600 flex items-center gap-2"
                            onClick={() => navigate('/charges/create')}
                        >
                            <PlusIcon className="w-5 h-5" />
                            CARGAR STOCK
                        </button>
                    </div>
                </div>
                <div className="overflow-x-auto border border-gray-300 rounded-lg">
                    <table className="min-w-full bg-white border rounded-lg">
                        <thead className="bg-gray-100">
                            <tr>
                                {tableHeaders.map((header) => (
                                    <th key={header} className="py-2 px-4 text-center border font-medium text-gray-700">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {discharges.map((discharge, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="text-center border">{discharge.id}</td>
                                    <td className="text-center border">{discharge.date}</td>
                                    <td className="px-4 text-start border">{discharge.reason}</td>
                                    <td className="text-center border">{discharge.responsible}</td>
                                    <td className="text-center border">{discharge.registeredBy}</td>
                                    <td className="py-2 px-4 text-center border flex justify-center">
                                        <SearchIcon className="w-5 h-5 text-green-500 cursor-pointer" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <p className="text-gray-600">Página: 1 de 1 | Registros del 1 al 2 | Total 2</p>
                    <div className="flex space-x-2">
                        <button className="py-2 px-4 border rounded">Primera</button>
                        <button className="py-2 px-4 border rounded">Anterior</button>
                        <button className="py-2 px-4 border rounded bg-blue-500 text-white">1</button>
                        <button className="py-2 px-4 border rounded">Siguiente</button>
                        <button className="py-2 px-4 border rounded">Última</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Charges };