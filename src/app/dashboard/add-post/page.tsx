import { Button } from "@/components/ui/button"
import { addUserAction } from "./actions/Users"

export default function AddPost() {
    return (
        <div>
            <h1>Add User</h1>
            <form className="flex flex-col gap-10" action={addUserAction}>
                <label>
                    Name
                    <input name="name" type="text" />
                </label>
                <label>
                    email
                    <input name="email" type="email" />
                </label>
                <label>
                    age
                    <input name="age" type="number" />
                </label>
                <Button type="submit">Add User</Button>
            </form>
        </div>
    )
}