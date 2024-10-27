import EditTaskForm from "@/components/EditTaskForm/EditTaskForm"
import { TaskDocument } from "@/models/task"
import { GiConsoleController } from "react-icons/gi"
import { MdFaceRetouchingOff } from "react-icons/md"

interface Params {
    params: { id: string }
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const response = await fetch(`${process.env.API_URL}/tasks/${id}`, {
    cache: 'no-store',
  });

  const data = await response.json();
  return data.task as TaskDocument;
}

const EditTaskPage = async ({ params }: Params) => {
  // この取得の仕方でないと警告される
  const { id } = await params;
  const task = await getTask(id);
  
  return (
    <div className='flex flex-col justify-center py-20'>
        <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
        <EditTaskForm task={task} />
    </div>
  )
}

export default EditTaskPage