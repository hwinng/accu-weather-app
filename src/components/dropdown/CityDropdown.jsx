import React from 'react';
import Select from 'react-select';

export const CityDropdown = ({
    locations,
    handleOnChange
}) => {
    return (
        <div className="search-bar">
            <Select
                classNamePrefix="select"
                placeholder="Search a city..."
                isSearchable="true"
                name="cities"
                options={locations}
                onChange={selectedOption =>
                    handleOnChange(selectedOption.label, selectedOption.code)
                }
            />
      </div>
    )
}
