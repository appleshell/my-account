import React from 'react'
import { Button, Space } from 'antd'
import { VISIBILITY_FILTERS } from '../constant'

export default function VisibilityFilter() {
  return (
    <div className="visibility-filter">
      <Space>
        {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
          const currentFilter = VISIBILITY_FILTERS[filterKey]
          return (
            <Button key={currentFilter} className="filter">
              {currentFilter}
            </Button>
          )
        })}
      </Space>
    </div>
  )
}
