import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 0, name: 'jenkin' },
  { id: 1, name: 'zeskin' },
  { id: 2, name: 'hoakin' },
  { id: 3, name: 'seikin' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
