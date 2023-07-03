import {
  BehaviourHandler,
  DynamicFormElement,
  DynamicFormElementType,
} from '../form';
import { DialogueState } from '../services/dialogue-state';

export class Action extends DynamicFormElement {
  name: string;
  function: BehaviourHandler;
  id: string | undefined;

  override componentType: DynamicFormElementType = 'Action';

  constructor(options: {
    name: string;
    function: BehaviourHandler;
    order: number;
    id?: string;
  }) {
    super();
    this.name = options.name || '';
    this.function = options.function;
    this.order = options.order === undefined ? 1 : options.order;
    if (!options.id) {
      this.id = options.name;
    }
  }
}
