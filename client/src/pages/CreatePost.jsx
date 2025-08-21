import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { preview } from "../assets"
import { FormField, Loader } from "../components"
import { getRandomPrompt } from "../utils"

const CreatePost = () => {
  const navigaate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    prompt: "",
    photoUrl: "",
  })
  const [generatingImage, setGeneratingImage] = useState(false)
  const [loading, setLoading] = useState(false)

  const generateImage = () => {}

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(formData.prompt)

    setFormData({ ...formData, prompt: randomPrompt })
  }

  return (
    <section className="mx-auto max-w-7xl">
      <div>
        <h1 className="text-[2rem] font-extrabold text-[#222328]">Create</h1>
        <p className="mt-2 max-w-[500px] text-[1rem] text-[#666e75]">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>
      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            type="text"
            label="Your name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            handleChange={handleChange}
          />
          <FormField
            type="text"
            label="Prompt"
            name="prompt"
            placeholder="A BBQ that is alive, in the style of a Pixar animated movie"
            value={formData.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 max-sm:mx-auto">
            {formData.photoUrl ? (
              <img
                src={formData.photoUrl}
                alt={formData.prompt}
                className="h-full w-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="Preview"
                className="h-9/12 w-9/12 object-contain opacity-40"
              />
            )}
            {generatingImage && (
              <div className="absolute inset-0 z-0 flex items-center justify-center rounded-lg bg-[rgba(0,0,0,0.5)]">
                <Loader />
              </div>
            )}
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className="w-full rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
          >
            {generatingImage ? "Generating..." : "Generate Image"}
          </button>
        </div>
        <div className="mt-10">
          <p className="mt-2 text-[0.9rem] text-[#666e75]">
            Once you have created the image you want, you can share it with the
            community
          </p>
          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-[#6469ff] px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
          >
            {loading ? "Sharing..." : "Share With The Community"}
          </button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
