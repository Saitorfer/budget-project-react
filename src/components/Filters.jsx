import { useState, useEffect } from 'react'

const Filters = ({ filter, setFilter }) => {
    return (
        <div className="filtros sombra contenedor">
            <form>
                <div className="campo">
                    <label>Filter Spends</label>
                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="">-- Select a category --</option>
                        <option value="savings">Savings</option>
                        <option value="food">Food</option>
                        <option value="house">House</option>
                        <option value="miscellaneous">Miscellaneous</option>
                        <option value="health">Health</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="subscription">Subscription</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters
