// postSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Post } from '../../interfaces';

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}
interface PostsAction {
  payload: number;
}

const initialState: PostsState = {
  posts: [] as Post[],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>('posts/fetchPosts', async (_, thunkAPI) => {
  try {
    const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Failed to fetch posts.');
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    deletePostById: (state, action: PostsAction) => {
      const id = action.payload;
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message!;
      });
  },
});

export default postsSlice.reducer;
export const { deletePostById } = postsSlice.actions;
