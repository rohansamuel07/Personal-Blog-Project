import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold text-gray-900 dark:text-white'>
        Create a post
      </h1>
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className='flex-1 border border-gray-300 p-2 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white'
          />
          <select className='flex-1 border border-gray-300 p-2 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white'>
            <option value="uncategorized">Select a category</option>
            <option value="javascript">JavaScript</option>
            <option value="reactjs">React.JS</option>
            <option value="nextjs">Next.JS</option>
          </select>
        </div>
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <input
            type='file'
            accept='image/*'
            className='flex-1 border border-gray-300 rounded-lg bg-white text-gray-900 dark:bg-gray-800 dark:border-gray-600 dark:text-white' // Ensuring proper background colors
          />
          <button
            type='button'
            className='bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-200'
          >
            Upload image
          </button>
        </div>
        <ReactQuill
          theme="snow"
          placeholder="Write something here...." // Set the placeholder as a string
          className='h-72 mb-12'
        />
        <button
          type='submit'
          className='bg-gradient-to-r from-purple-500 to-blue-500 text-gray-900 dark:text-white py-2 px-4 rounded-lg hover:opacity-80 transition-opacity duration-200'
        >
          Publish post
        </button>
      </form>
    </div>
  );
}
