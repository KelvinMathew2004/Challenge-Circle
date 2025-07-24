import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../client'
import './EditPost.css'

const EditPost = ({data}) => {

    const {id} = useParams()
    const [post, setPost] = useState({id: null, title: "", author: "", description: ""})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            const { data, error } = await supabase
                .from('Posts')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.error('Error fetching post:', error)
            } else if (data) {
                setPost({
                    id: data.id,
                    title: data.title || '',
                    author: data.author || '',
                    description: data.description || ''
                })
            }
            setLoading(false)
        }
        fetchPost()
    }, [id])

    const handleChange = (event) => {
        const {name, value} = event.target
        setPost( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    const updatePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .update({ title: post.title, author: post.author,  description: post.description})
            .eq('id', id);

        window.location = "/";
    }

    // UPDATE post
    const deletePost = async (event) => {
        event.preventDefault();

        await supabase
            .from('Posts')
            .delete()
            .eq('id', id); 

        window.location = "/";
    }

    if (loading) return <p>Loading...</p>

    return (
            <form className='edit-form-container'>
                <div className='form-group'>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" class="form-input" value={post.title} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" name="author" class="form-input" value={post.author} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="description">Description</label>
                    <textarea rows="5" cols="50" id="description" class="form-input" name="description" value={post.description} onChange={handleChange} >
                    </textarea>
                </div>

                <button type="submit" className="submit-btn" onClick={updatePost}>Submit</button>
                <button className="deleteButton" onClick={deletePost}>Delete</button>
            </form>
    )
}

export default EditPost