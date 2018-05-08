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

export function getPerformanceReview (targetUserid, feedback) {
  const data = {
    userid: targetUserid,
    content: feedback
  }
  alert(targetUserid)
  return axios.put(api_base + '/getperformance/1')
}



export function deleteEmployee () {
  const userid = AuthService.getCurrentUser()
  return axios.put(api_base + '/deletemployee' + {userid})
}




export function getReview () {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.get(api_base + '/reviews', {headers})
}



export function getFeedback () {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.get(api_base + '/reviews/feedback', {headers})
}

export function createFeedback (targetUserid, feedback) {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  const data = {
    from: userid,
    text: feedback
  }
  return axios.post(api_base + `/reviews/${targetUserid}/feedback`, data, {headers})
}


// TO BE DELETED:
export function updateReview (data) {
  const userid = AuthService.getCurrentUser()
  const headers = {userid}
  return axios.put(api_base + '/reviews', data, {headers})
}

