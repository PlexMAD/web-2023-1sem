import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface IMyForm {
  title: string;
  text: string;
}

const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IMyForm>({
    mode: "onBlur",
  });

  const [tasks, setTasks] = useState<IMyForm[]>([]);

  const saveElement: SubmitHandler<IMyForm> = (data) => {
    setTasks((prev) => [...prev, data]);
    reset();
  };

  return (
    <div>
      <h1>Создание нового поста</h1>
      <form onSubmit={handleSubmit(saveElement)}>
        <input
          {...register("title", {
            required: "Поле обязательно для заполнения",
            maxLength: {
              value: 20,
              message: "Нужно меньше символов",
            },
          })}
          placeholder="Введите заголовок"
        />
        <div>{errors.title?.message}</div>
        <input
          {...register("text", {
            required: "Поле обязательно для заполнения",
            minLength: {
              value: 5,
              message: "Нужно больше символов",
            },
          })}
          placeholder="Введите текст"
        />
        <div>{errors.text?.message}</div>
        <button disabled={!isValid} type="submit">
          Сохранить
        </button>
      </form>
      {tasks.map((task, index) => (
        <p key={index}>
          {task.title} - {task.text}
        </p>
      ))}
    </div>
  );
};

export default Create;
