import {Component} from 'react'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class FiltersGroup extends Component {
  renderEmploymentType = () => (
    <>
      {employmentTypesList.map(eachType => (
        <div className="checkbox-container" key={eachType.employmentTypeId}>
          <input
            className="checkbox"
            type="checkbox"
            id={eachType.employmentTypeId}
          />
          <label className="checkbox-label" htmlFor={eachType.employmentTypeId}>
            {eachType.label}
          </label>
        </div>
      ))}
    </>
  )

  renderSalaryRanges = () => (
    <>
      {salaryRangesList.map(eachType => (
        <div className="checkbox-container" key={eachType.salaryRangeId}>
          <input
            className="checkbox"
            type="checkbox"
            id={`range${eachType.salaryRangeId}`}
          />
          <label
            className="checkbox-label"
            htmlFor={`range${eachType.salaryRangeId}`}
          >
            {eachType.label}
          </label>
        </div>
      ))}
    </>
  )

  render() {
    return (
      <div>
        <h1 className="filters-heading">Type of Employment</h1>
        {this.renderEmploymentType()}
        <div className="hr-line">
          <hr />
        </div>
        <h1 className="filters-heading">Salary Range</h1>
        {this.renderSalaryRanges()}
      </div>
    )
  }
}

export default FiltersGroup
