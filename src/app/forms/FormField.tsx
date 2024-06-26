"use client"

import React, { ChangeEvent, useState } from 'react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FormControl, FormLabel } from '@/components/ui/form';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { QuestionSelectModel } from '@/types/form-types';
import { FieldOptionSelectModel } from '@/types/form-types';
import { Label } from '@/components/ui/label';

type Props = {
  element: QuestionSelectModel & {
    fieldOptions: Array<FieldOptionSelectModel>
  }
  value: string,
  onChange: (value?: string) => void,
  className: string,
}

const FormField = ({ element, value, onChange, className }: Props) => {
  if (!element) return null;

  const components = {
    Input: () => <Input type="text" onChange={(e) => onChange(e.target.value)} value={value} className={className}/>,
    Switch: () => <Switch onChange={(e) => onChange()} value={value} className={className}/>,
    Textarea: () => <Textarea onChange={(e) => onChange(e.target.value)} value={value} className={className}/>,
    Select: () => (
      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className='text-black'>
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent>
          {element.fieldOptions.map((option) => (
            <SelectItem key={`${option.text} ${option.value}`} value={`answerId_${option.id}`}>{option.text}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    ),
    RadioGroup: () => (
      <RadioGroup onValueChange={onChange} value={value}>
        {element.fieldOptions.map((option, index) => (
          <div key={`${option.text} ${option.value}`} className='flex items-center space-x-2'>
            <FormControl>
              <RadioGroupItem value={`answerId_${option.id}`} id={option?.value?.toString() || `answerId_${option.id}`}>{option.text}</RadioGroupItem>
            </FormControl>
            <Label className='text-base'>{option.text}</Label>
          </div>
        ))}
      </RadioGroup>
    )
  }

  return element.fieldType && components[element.fieldType] ? components[element.fieldType]() : null;
}

export default FormField