import React, { useEffect, useMemo, useState } from 'react';


function Filters({ materials, models, types, handleMaterialChange, handleModelChange, handleTypeChange, selectedMaterials, selectedModels, selectedTypes }) {
    return (
        <>
        <div className="filter_left_container">
              <div className="filter_heading">
                <h3>Тип</h3>
            </div>
            <div className="filters">
                <div className="filter_category">
                    {types.map((data, i) => (
                        <label key={i}>
                            <input
                                type="checkbox"
                                value={data.title}
                                checked={selectedTypes.includes(data.id)}
                                onChange={() => handleTypeChange(data.id)}
                            />
                            <span className="active_filter">{data.title}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="filter_heading">
                <h3>Материал</h3>
            </div>
            <div className="filters">
                <div className="filter_category">
                    {materials.map((data, i) => (
                        <label key={i}>
                            <input
                                type="checkbox"
                                value={data.title}
                                checked={selectedMaterials.includes(data.id)}
                                onChange={() => handleMaterialChange(data.id)}
                            />
                            <span className="active_filter">{data.title}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="filter_heading">
                <h3>Вставка</h3>
            </div>
            <div className="filters">
                <div className="filter_category">
                    {models.map((data, i) => (
                        <label key={i}>
                            <input
                                type="checkbox"
                                value={data.title}
                                checked={selectedModels.includes(data.id)}
                                onChange={() => handleModelChange(data.id)}
                            />
                            <span className="active_filter">{data.title}</span>
                        </label>
                    ))}
                </div>
            </div>
          
        </div>
        </>
    );
}

export default Filters;
