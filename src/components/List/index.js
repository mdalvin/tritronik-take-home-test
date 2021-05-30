import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import {
  ListContainer,
  ListWrapper,
  SpinnerWrapper,
  TaskAction,
  TaskButton,
  TaskCard,
  TaskInfo,
  TaskP,
  TaskTextWrapper,
  TaskTitle,
  WelcomeH2,
  WelcomeP,
  WelcomeWrapper,
} from "./ListElements";
import Swal from "sweetalert2";
import Spinner from "../Spinner";

const List = () => {
  const [tasks, setTasks] = useState("");
  const url = "https://note-dot-dev-tritronik.appspot.com/note";

  useEffect(() => {
    axios
      .get(url, { headers: { token: "a0fd26ac-c3e8-488e-b90b-22bc97e73a58" } })
      .then((res) => {
        console.log(res.data.content);
        setTasks(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won't be able to retrieve this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1f386f",
      cancelButtonColor: "#fec14a",
      confirmButtonText: "Yes, delete it!",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`https://note-dot-dev-tritronik.appspot.com/note?id=${id}`, {
            headers: { token: "a0fd26ac-c3e8-488e-b90b-22bc97e73a58" },
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            return window.location.reload();
          });
        Swal.fire("Done!", "This note has been deleted.", "success");
      }
    });
  };

  return (
    <>
      <ListContainer>
        <WelcomeWrapper>
          <WelcomeH2>
            Welcome to <span style={{ color: "#FEE453" }}>No</span>
            <span style={{ color: "#FEC14A" }}>Ta</span>
          </WelcomeH2>
          <WelcomeP>Just. Note. It.</WelcomeP>
        </WelcomeWrapper>
        <TaskTextWrapper>
          <TaskP>Your recorded notes:</TaskP>
        </TaskTextWrapper>
        <ListWrapper>
          {tasks.length !== 0 ? (
            tasks.map((task) => (
              <TaskCard
                id={task.id}
                style={{ backgroundColor: `${task.color}` }}
              >
                <TaskInfo>
                  <TaskTitle>{task.note}</TaskTitle>
                </TaskInfo>
                <TaskAction>
                  <TaskButton to="/edit">
                    <MdEdit />
                  </TaskButton>
                  <TaskButton
                    onClick={() => {
                      handleDelete(task.id);
                    }}
                  >
                    <MdDelete />
                  </TaskButton>
                </TaskAction>
              </TaskCard>
            ))
          ) : (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          )}
          ;
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
