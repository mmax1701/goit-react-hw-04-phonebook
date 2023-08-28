import React from 'react'
import PropTypes from 'prop-types'
import css from './Filter.module.css'

export const Filter = ({filter, handleChangeFilter}) => {
    return (
        <label>
            <span>Find contacts by name</span>
            <input type="text" value={filter} onChange={handleChangeFilter} className={css.filter} />
        </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired
}