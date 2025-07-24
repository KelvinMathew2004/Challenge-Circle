import { useState } from 'react'
import { supabase } from '../client'
import './CreatePost.css'

const CreatePost = () => {

    const [post, setPost] = useState({title: "", author: "", description: ""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const createPost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .insert({title: post.title, author: post.author, description: post.description})
            .select();

        window.location = "/";
     }

    return (
        <form className='edit-form-container'>
            <div className='form-group'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" class="form-input" value={post.title} onChange={handleChange} placeholder="e.g., Ice Bucket Challenge 2.0" />
            </div>

            <div className='form-group'>
                <label htmlFor="author">Author</label>
                <input type="text" id="author" name="author" class="form-input" value={post.author} onChange={handleChange} />
            </div>

            <div className='form-group'>
                <label htmlFor="description">Description</label>
                <textarea rows="5" cols="50" id="description" class="form-input" name="description" value={post.description} onChange={handleChange} placeholder="Describe the terms of your challenge..." >
                </textarea>
            </div>

            <button type="submit" className="submit-btn" onClick={createPost}>Submit</button>
        </form>
    )
}

export default CreatePost