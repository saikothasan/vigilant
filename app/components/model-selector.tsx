import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ModelType } from "../actions"

interface ModelSelectorProps {
  value: ModelType
  onChange: (value: ModelType) => void
}

export function ModelSelector({ value, onChange }: ModelSelectorProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select Model" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="gemini-pro">Gemini Pro</SelectItem>
        <SelectItem value="gemini-pro-vision">Gemini Pro Vision</SelectItem>
      </SelectContent>
    </Select>
  )
}

