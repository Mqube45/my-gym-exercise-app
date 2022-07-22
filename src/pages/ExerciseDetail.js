import React from 'react'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { Box } from '@mui/material'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'
import { exerciseOptions, fetchData, youtubeVideosOptions } from '../utils/fetchData'

const ExerciseDetail = () => {

  const[exerciseDetail, setExerciseDetail] = useState({})
  const [youtubeVideos, setYoutubeVideos] = useState([])
  const [targetMuscle, setTargetMuscle] = useState([])
  const [equipment, setEquipment] = useState([])

  const {id} = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exercisedbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

      const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`, exerciseOptions)
      setExerciseDetail(exerciseDetailData)

      const youtubeVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeVideosOptions)
      setYoutubeVideos(youtubeVideosData.contents)

      const targetMuscleData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions)
      setTargetMuscle(targetMuscleData)

      const equipmentData = await fetchData(`${exercisedbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions)
      setEquipment(equipmentData)

    }

    fetchExercisesData()
  }, [id])
  


  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos youtubeVideos ={youtubeVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscle = {targetMuscle} equipment = {equipment} />
    </Box>
  )
}

export default ExerciseDetail