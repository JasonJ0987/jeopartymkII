import React, { useState } from "react";
import Modal from "./Modal";
import { questions1 } from '../constants';

const QuestionCard = () => {
    const [current, setCurrent] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [qCard1, setQCard1] = useState(true);
    const [qCard2, setQCard2] = useState(true);
    const [qCard3, setQCard3] = useState(true);
    const [qCard4, setQCard4] = useState(true);
    const [qCard5, setQCard5] = useState(true);
    const [qCard6, setQCard6] = useState(true);
    const [qCard7, setQCard7] = useState(true);
    const [qCard8, setQCard8] = useState(true);
    const [qCard9, setQCard9] = useState(true);
    const [qCard10, setQCard10] = useState(true);
    const [qCard11, setQCard11] = useState(true);
    const [qCard12, setQCard12] = useState(true);
    const [qCard13, setQCard13] = useState(true);
    const [qCard14, setQCard14] = useState(true);
    const [qCard15, setQCard15] = useState(true);
    const [qCard16, setQCard16] = useState(true);
    const [qCard17, setQCard17] = useState(true);
    const [qCard18, setQCard18] = useState(true);
    const [qCard19, setQCard19] = useState(true);
    const [qCard20, setQCard20] = useState(true);
    const [qCard21, setQCard21] = useState(true);
    const [qCard22, setQCard22] = useState(true);
    const [qCard23, setQCard23] = useState(true);
    const [qCard24, setQCard24] = useState(true);
    const [qCard25, setQCard25] = useState(true);

    let removeAnswer1 = "m-auto"
    let removeAnswer2 = "m-auto"
    let removeAnswer3 = "m-auto"
    let removeAnswer4 = "m-auto"
    let removeAnswer5 = "m-auto"
    let removeAnswer6 = "m-auto"
    let removeAnswer7 = "m-auto"
    let removeAnswer8 = "m-auto"
    let removeAnswer9 = "m-auto"
    let removeAnswer10 = "m-auto"
    let removeAnswer11 = "m-auto"
    let removeAnswer12 = "m-auto"
    let removeAnswer13 = "m-auto"
    let removeAnswer14 = "m-auto"
    let removeAnswer15 = "m-auto"
    let removeAnswer16 = "m-auto"
    let removeAnswer17 = "m-auto"
    let removeAnswer18 = "m-auto"
    let removeAnswer19 = "m-auto"
    let removeAnswer20 = "m-auto"
    let removeAnswer21 = "m-auto"
    let removeAnswer22 = "m-auto"
    let removeAnswer23 = "m-auto"
    let removeAnswer24 = "m-auto"
    let removeAnswer25 = "m-auto"

    const displayQuestion1 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard1(false);
    }
    if (qCard1) {
        removeAnswer1 = "m-auto"
    } else {
        removeAnswer1 = "hidden"
    }
    const displayQuestion2 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard2(false);
    }
    if (qCard2) {
        removeAnswer2 = "m-auto"
    } else {
        removeAnswer2 = "hidden"
    }
    const displayQuestion3 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard3(false);
    }
    if (qCard3) {
        removeAnswer3 = "m-auto"
    } else {
        removeAnswer3 = "hidden"
    }
    const displayQuestion4 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard4(false);
    }
    if (qCard4) {
        removeAnswer4 = "m-auto"
    } else {
        removeAnswer4 = "hidden"
    }
    const displayQuestion5 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard5(false);
    }
    if (qCard5) {
        removeAnswer5 = "m-auto"
    } else {
        removeAnswer5 = "hidden"
    }
    const displayQuestion6 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard6(false);
    }
    if (qCard6) {
        removeAnswer6 = "m-auto"
    } else {
        removeAnswer6 = "hidden"
    }
    const displayQuestion7 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard7(false);
    }
    if (qCard7) {
        removeAnswer7 = "m-auto"
    } else {
        removeAnswer7 = "hidden"
    }
    const displayQuestion8 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard8(false);
    }
    if (qCard8) {
        removeAnswer8 = "m-auto"
    } else {
        removeAnswer8 = "hidden"
    }
    const displayQuestion9 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard9(false);
    }
    if (qCard9) {
        removeAnswer9 = "m-auto"
    } else {
        removeAnswer9 = "hidden"
    }
    const displayQuestion10 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard10(false);
    }
    if (qCard10) {
        removeAnswer10 = "m-auto"
    } else {
        removeAnswer10 = "hidden"
    }
    const displayQuestion11 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard11(false);
    }
    if (qCard11) {
        removeAnswer11 = "m-auto"
    } else {
        removeAnswer11 = "hidden"
    }
    const displayQuestion12 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard12(false);
    }
    if (qCard12) {
        removeAnswer12 = "m-auto"
    } else {
        removeAnswer12 = "hidden"
    }
    const displayQuestion13 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard13(false);
    }
    if (qCard13) {1
        removeAnswer13 = "m-auto"
    } else {
        removeAnswer13 = "hidden"
    }
    const displayQuestion14 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard14(false);
    }
    if (qCard14) {
        removeAnswer14 = "m-auto"
    } else {
        removeAnswer14 = "hidden"
    }
    const displayQuestion15 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard15(false);
    }
    if (qCard15) {
        removeAnswer15 = "m-auto"
    } else {
        removeAnswer15 = "hidden"
    }
    const displayQuestion16 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard16(false);
    }
    if (qCard16) {
        removeAnswer16 = "m-auto"
    } else {
        removeAnswer16 = "hidden"
    }
    const displayQuestion17 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard17(false);
    }
    if (qCard17) {
        removeAnswer17 = "m-auto"
    } else {
        removeAnswer17 = "hidden"
    }
    const displayQuestion18 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard18(false);
    }
    if (qCard18) {
        removeAnswer18 = "m-auto"
    } else {
        removeAnswer18 = "hidden"
    }
    const displayQuestion19 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard19(false);
    }
    if (qCard19) {
        removeAnswer19 = "m-auto"
    } else {
        removeAnswer19 = "hidden"
    }
    const displayQuestion20 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard20(false);
    }
    if (qCard20) {
        removeAnswer20 = "m-auto"
    } else {
        removeAnswer20 = "hidden"
    }
    const displayQuestion21 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard21(false);
    }
    if (qCard21) {
        removeAnswer21 = "m-auto"
    } else {
        removeAnswer21 = "hidden"
    }
    const displayQuestion22 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard22(false);
    }
    if (qCard22) {
        removeAnswer22 = "m-auto"
    } else {
        removeAnswer22 = "hidden"
    }
    const displayQuestion23 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard23(false);
    }
    if (qCard23) {
        removeAnswer23 = "m-auto"
    } else {
        removeAnswer23 = "hidden"
    }
    const displayQuestion24 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard24(false);
    }
    if (qCard24) {
        removeAnswer24 = "m-auto"
    } else {
        removeAnswer24 = "hidden"
    }
    const displayQuestion25 = (event, question) => {
        event.preventDefault();
        setModalOpen(true);
        setCurrent(question);
        setQCard25(false);
    }
    if (qCard25) {
        removeAnswer25 = "m-auto"
    } else {
        removeAnswer25 = "hidden"
    }


    return (
        <div className="grid grid-rows-5 grid-flow-col gap-1 justify-center overflow-auto">
        {modalOpen && <Modal modalOpen={setModalOpen} question={current} />}
        {questions1
            .filter((question) => question.id === 1)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion1(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer1}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 2)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion2(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer2}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 3)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion3(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer3}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 4)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion4(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer4}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 5)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion5(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer5}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 6)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion6(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer6}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 7)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion7(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer7}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 8)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion8(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer8}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 9)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion9(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer9}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 10)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion10(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer10}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 11)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion11(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer11}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 12)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion12(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer12}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 3)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion13(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer13}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 14)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion14(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer14}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 15)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion15(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer15}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 16)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion16(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer16}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 17)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion17(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer17}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 18)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion18(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer18}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 19)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion19(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer19}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 20)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion20(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer20}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 21)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion21(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer21}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 22)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion22(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer22}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 23)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion23(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer23}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 24)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion24(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer24}>{quest.points}</p>
              </div>
        ))}
        {questions1
            .filter((question) => question.id === 25)
            .map((quest) => (
              <div
                onClick={(event) => displayQuestion25(event, quest)}
                className="cursor-pointer flex w-64 h-24 border-2 border-white border-opacity-200 rounded-none"
                key={quest.id}
              >
                <p className={removeAnswer25}>{quest.points}</p>
              </div>
        ))}
        </div>
    )
  }

export default QuestionCard
