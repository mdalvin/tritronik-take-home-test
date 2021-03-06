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
      .get(url, { headers: { token: "5e2767bb-1518-4d0d-8c36-98536d54a7a8" } })
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
            headers: { token: "5e2767bb-1518-4d0d-8c36-98536d54a7a8" },
          })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            return window.location.reload();
          });
        Swal.fire("Done!", "This note has been deleted.", "success");
      } else if (res.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelled",
          icon: "error",
          text: "Relax, your note is still there",
          confirmButtonColor: "#1f386f",
          confirmButtonText: "Thank God !",
        });
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
