const FormField = ({
  type,
  label,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {label}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            className="rounded-[5px] bg-[#ececf1] px-2 py-1 text-xs font-semibold text-black"
            onClick={handleSurpriseMe}
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required
        value={value}
        onChange={handleChange}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 outline-none focus:border-[#4649ff] focus:ring-[#4649ff]"
      />
    </div>
  )
}

export default FormField
