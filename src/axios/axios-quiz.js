import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-7142e.firebaseio.com/quiz/quizers/quizers'
});