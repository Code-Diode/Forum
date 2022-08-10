import { createSlice, nanoid } from "@reduxjs/toolkit";
import posts from "../../data/posts";

const initialState = posts;

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        reactions:  {
                            thumbsUp: 0,
                            thumbsDown: 0,
                            heart: 0
                        }
                    }
                }
            }
        },
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postsSlice.actions

export default postsSlice.reducer;

export function getPostById(state,postId) {
    return state.posts.find(post => post.id === postId);
}