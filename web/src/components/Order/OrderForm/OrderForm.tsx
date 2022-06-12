import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const OrderForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.order?.id)
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
          name="status"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Status
        </Label>
        
          <TextField
            name="status"
            defaultValue={props.order?.status}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="status" className="rw-field-error" />

        <Label
          name="user_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        
          <NumberField
            name="user_id"
            defaultValue={props.order?.user_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="user_id" className="rw-field-error" />

        <Label
          name="restaurant_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Restaurant id
        </Label>
        
          <NumberField
            name="restaurant_id"
            defaultValue={props.order?.restaurant_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="restaurant_id" className="rw-field-error" />

        <Label
          name="total_price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Total price
        </Label>
        
          <TextField
            name="total_price"
            defaultValue={props.order?.total_price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true }}
          />
        

        <FieldError name="total_price" className="rw-field-error" />

        <Label
          name="table_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Table id
        </Label>
        
          <NumberField
            name="table_id"
            defaultValue={props.order?.table_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="table_id" className="rw-field-error" />

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

export default OrderForm
