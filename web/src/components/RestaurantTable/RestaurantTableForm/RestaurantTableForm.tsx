import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms'



const RestaurantTableForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.restaurantTable?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />
      
        <Label
          name="restaurant_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Restaurant id
        </Label>
        
          <NumberField
            name="restaurant_id"
            defaultValue={props.restaurantTable?.restaurant_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="restaurant_id" className="rw-field-error" />

        <Label
          name="table_no"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Table no
        </Label>
        
          <TextField
            name="table_no"
            defaultValue={props.restaurantTable?.table_no}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="table_no" className="rw-field-error" />

        <Label
          name="available"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Available
        </Label>
        
          <CheckboxField
            name="available"
            defaultChecked={props.restaurantTable?.available}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="available" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default RestaurantTableForm
