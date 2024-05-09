import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

interface IMyForm {
  name: string;
  picture: string; 
}

const Info = () => {
  const [task, setTask] = useState<IMyForm>();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const saveElement = async (data: IMyForm) => {
    const pictureBase64 = await convertToBase64(data.picture[0]);
    setTask({ name: data.name, picture: pictureBase64 });
    reset();
  };

  const convertToBase64 = (file: any) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  return (
    <>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("name", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
        />
        <input
          type="file"
          accept="image/*"
          {...register("picture", {
            required: "Required",
          })}
        />

        <div>{errors.name?.message}</div>
        <div>{errors.picture?.message}</div>
        <button type="submit">Сохранить</button>
      </form>

      {!!task?.name && (
        <PDFDownloadLink
          document={<MyDocument name={task.name} picture={task.picture} />}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download now!"
          }
        </PDFDownloadLink>
      )}
    </>
  );
};

const MyDocument: React.FC<IMyForm> = ({ name, picture }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>{name}</Text>
        </View>
        <View style={styles.section}>
          {picture && <Image src={picture} />}
        </View>
      </Page>
    </Document>
  );
};

export default Info;
