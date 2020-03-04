import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-8ac80.firebaseio.com/'
})