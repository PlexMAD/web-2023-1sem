import React from 'react';
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';


// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

interface IMyForm {
  name: string;
  picture: File;
}

const Info = () => {
  const [task, setTask] = useState<IMyForm>()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IMyForm>({
    mode: "onBlur",
  })

  const saveElement = (data: IMyForm) => {
    setTask(data)
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register('name', {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов"
            }
          }
          )}
        />

        <div>{errors.name?.message}</div>
        <button type="submit">Сохранить</button>
      </form>

      {!!task?.name && 
        <PDFDownloadLink document={<MyDocument name='' />} fileName="somename.pdf">
          {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
        </PDFDownloadLink>}
    </>
  )
}

interface Props {
  name: string
}

const MyDocument:React.FC<Props> = ({name}) => {
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{name}</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
  )
}


export default Info;
