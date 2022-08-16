import MenuEdit from "./MenuEdit";
import { useForm } from "react-hook-form";
import style from './NoteCard.module.css';

function NoteCard({sendNoteToDB}) {

    // Form con react-hoock-form
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        const { title, description } = data;
        sendNoteToDB(title, description);
        e.target.reset();
    }

    return (
        <>
        <div className={style.noteCard} style={{ border: errors.title || errors.description? '1px solid red' : '' }}>

            <form onSubmit={handleSubmit(onSubmit)}>
                
                    <input
                        type="text"
                        placeholder="Title"
                        name="title"
                        {...register("title", {
                            required: {
                                value: true,
                                message: 'Title is required',
                            }
                        })
                        }
                    />

                    <hr/>

                    <input
                        type="text"
                        placeholder="Enter your description"
                        name="description"
                        {...register("description", {
                            required: {
                                value: true,
                                message: 'description is required'
                            }
                        })}
                    />
                    
                <input type="submit" value={'Created'} />
                <input type="submit" value={'Cancelar'} />

                <MenuEdit />
            </form>

        </div>
        <span>{errors.title?.message || errors.description?.message}</span>
        </>
    )
}

export default NoteCard;