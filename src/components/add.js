import React from 'react';
import { Form, Button } from 'semantic-ui-react'


const Add = ({ addFeature, orgID }) => (
  <div>
    <Form onSubmit ={
      (e)=>{
        e.preventDefault()
        console.log(e.target.tags.value.split(' '));
        let feature = {
          data:{
            name:e.target.name.value,
            description:e.target.description.value,
            markdown:e.target.markdown.value,
            tags:[e.target.tags.value.split(' ')]
          },
          orgID
        }
        return (
          addFeature(feature)
      )}
    }>
      <Form.Field width={4}>
        <label>Feature Name</label>
        <input placeholder="Featue Name" name='name'/>
      </Form.Field>
      <Form.Field width={4}>
        <label>Feature Discription</label>
        <input placeholder="Discription" name='description'/>
      </Form.Field>
      <Form.TextArea width={8} label={'Markdown'} placeholder="Markdown Script" name="markdown" />
      <Form.Field>
        <label>Tags</label>
        <input placeholder="Tags" name='tags' />
      </Form.Field>
      <Button type="submit">Submit Feature</Button>
    </Form>
  </div>
);

export default Add;
