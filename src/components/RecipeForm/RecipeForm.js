import { FormField, Form } from './RecipeForm.styled';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';



const RecipeSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  image: Yup.string().required('Required'),
  time: Yup.number().positive('Must be > 0 !!!').required('Required'),
  servings: Yup.number().positive('Must be > 0 !!!').required('Required'),
  calories: Yup.number().positive('Must be > 0 !!!').required('Required'),
  difficulty: Yup.string()
    .oneOf(['easy', 'medium', 'hard'])
    .required('Required'),
});

export const RecipeForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        image: '',
        time: 0,
        servings: 0,
        calories: 0,
        difficulty: 'easy',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      <Form>
        <FormField>
          Name
          <Field name="name" />
        </FormField>
        <FormField>
          Image
          <Field name="image" />
        </FormField>
        <FormField>
          Time
          <Field type="number" name="time" />
        </FormField>
        <FormField>
          Servings
          <Field type="number" name="servings" />
        </FormField>
        <FormField>
          Calories
          <Field type="number" name="calories" />
        </FormField>
        <FormField>
          Difficulty
          <Field as="select" name="difficulty">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </Field>
        </FormField>
        <button type="submit">Save recipe</button>
      </Form>
    </Formik>
  );
};
