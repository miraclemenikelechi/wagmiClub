import { medalType, winningMetrics } from "../../assets/data";
import { SelectField, TextField, TextareaField } from "../index";

const FormField = ({
	group,
	errors,
	touched,
	formData,
	handleBlur,
	setFieldValue,
	handleFormChange,
}) => {
	const { title, address, validator, additionalInfo } = formData;

	console.table(errors);
	console.log(touched);

	return (
		<>
			{/* Medal Title Field */}
			<TextField
				id="title"
				group={group}
				label="Medal Title"
				value={title}
				touched={touched}
				onBlur={handleBlur}
				error={errors.title}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Medal Type Dropdown */}
			<SelectField
				id="type"
				group={group}
				label="Medal Type"
				options={medalType}
				edit={false}
				onChange={handleFormChange}
				setFieldValue={setFieldValue}
				error={errors.type}
				touched={touched}
			/>

			{/* Contract Address Field */}
			<TextField
				id="address"
				group={group}
				label="Contract Address"
				value={address}
				touched={touched}
				onBlur={handleBlur}
				error={errors.address}
				edit={true}
				placeholder="0x636h821nb"
				onChange={handleFormChange}
			/>

			{/* Winning Metrics Dropdown */}
			<SelectField
				id="metrics"
				group={group}
				label="Winning Metrics"
				options={winningMetrics}
				edit={false}
				onChange={handleFormChange}
				setFieldValue={setFieldValue}
				error={errors.metrics}
				touched={touched}
			/>

			{/* Validator's Name & Position Field */}
			<TextField
				id="validator"
				group={group}
				label="Medal Validator's Name & Position"
				value={validator}
				touched={touched}
				onBlur={handleBlur}
				error={errors.validator}
				edit={false}
				onChange={handleFormChange}
			/>

			{/* Additional Information Textarea */}
			<TextareaField
				id="additionalInfo"
				group={group}
				label="Additional Information"
				value={additionalInfo}
				touched={touched}
				onBlur={handleBlur}
				errors={errors.additionalInfo}
				onChange={handleFormChange}
			/>
		</>
	);
};

export default FormField;