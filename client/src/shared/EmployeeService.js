import axios from 'axios'
import * as AuthService from './AuthService'

const api_base = 'http://localhost:3001'

export function getEmployees () {
  return axios.get(api_base + '/employees')
}

export function editEmployee (targetUserid, feedback) {
  const data = {
    userid: targetUserid,
    newname: feedback
  }
  return axios.post(api_base + '/editemployee', data)
}

export function deleteEmployee (targetUserid) {
  const data = {
    userid: targetUserid
  }
  //alert(targetUserid)
  return axios.get(api_base + `/deleteemployee/${targetUserid}`)
}

export function addEmployee (feedback) {
  const data = {
    newname: feedback
  }
  return axios.post(api_base + '/addemployee', data)
}

export function updatePerformance (targetUserid, feedback) {
  const data = {
    userid: targetUserid,
    content: feedback
  }
  //alert(targetUserid)
  return axios.post(api_base + '/performance', data)
}

export function getPerformanceReview (targetUserid) {
  const data = {
    userid: targetUserid
  }
  alert(targetUserid)
  return axios.get(api_base + `/getperformance/${targetUserid}`)
}
