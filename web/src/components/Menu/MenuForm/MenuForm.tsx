import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'



const MenuForm = (props) => {
  const onSubmit = (data) => {

  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    
    
  
    props.onSave(data, props?.menu?.id)
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
          name="item_name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Item name
        </Label>
        
          <TextField
            name="item_name"
            defaultValue={props.menu?.item_name}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="item_name" className="rw-field-error" />

        <Label
          name="category_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Category id
        </Label>
        
          <NumberField
            name="category_id"
            defaultValue={props.menu?.category_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="category_id" className="rw-field-error" />

        <Label
          name="cuisine_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Cuisine id
        </Label>
        
          <NumberField
            name="cuisine_id"
            defaultValue={props.menu?.cuisine_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="cuisine_id" className="rw-field-error" />

        <Label
          name="restaurant_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Restaurant id
        </Label>
        
          <NumberField
            name="restaurant_id"
            defaultValue={props.menu?.restaurant_id}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ required: true }}
          />
        

        <FieldError name="restaurant_id" className="rw-field-error" />

        <Label
          name="image_url"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>
        
          <TextField
            name="image_url"
            defaultValue={props.menu?.image_url}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
          />
        

        <FieldError name="image_url" className="rw-field-error" />

        <Label
          name="price"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Price
        </Label>
        
          <TextField
            name="price"
            defaultValue={props.menu?.price}
            className="rw-input"
            errorClassName="rw-input rw-input-error"
            validation={{ valueAsNumber: true, required: true }}
          />
        

        <FieldError name="price" className="rw-field-error" />

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

export default MenuForm
