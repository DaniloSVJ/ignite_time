import { Play } from 'phosphor-react'
import {
  HomeContainer,
  FormContainer,
  CountDownContainer,
  Separator,
  StartCountDownButton,
  TaskInput,
  MinutesAmountInput,
} from './styles'
export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="tasklist"
            placeholder="Dê um nome para seu projeto"
          />
          <datalist id="tasklist">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>
          <label htmlFor="">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5} // aumenta de 5 em
            min={5} // minimo 5
            max={60} // maximo 60
          />

          <span>minutos.</span>
        </FormContainer>
        <CountDownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountDownContainer>
        <StartCountDownButton type="submit">
          <Play size={24} />
          Carregar
        </StartCountDownButton>
      </form>
    </HomeContainer>
  )
}
