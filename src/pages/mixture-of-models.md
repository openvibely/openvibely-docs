# Mixture Of Models

A Mixture of Models is a virtual model config that asks one or more reference models for private advice, then gives that advice to an aggregator model that produces the visible response.

Use a mixture when a task benefits from multiple model perspectives and the extra calls, latency, and cost are justified.

## Create A Mixture

Configure the individual model configs first. Then open `Models`, click `+ Add Model`, and choose `Mixture of Models`.

| Control | Behavior |
|---|---|
| Reference Models | Existing non-mixture configs that produce advisory output. |
| Aggregator Model | The acting model that receives the references and returns the final response. |
| Reference Timeout | Maximum wait for each reference call. The default is 90 seconds. |
| Reference Temperature | Sampling temperature for advisory calls. The default is `0.6`. |
| Aggregator Temperature | Sampling temperature for the final call. The default is `0.4`. |

Choose at least one reference model and one aggregator. A mixture cannot use another mixture as a reference or aggregator. The same non-mixture config may be both a reference and the aggregator if that behavior is intentional.

## Execution Flow

| Phase | What Happens |
|---|---|
| References | Advisory calls run concurrently with runtime tools disabled. |
| Context assembly | Successful reference outputs are added to private context for the aggregator. |
| Aggregator | The acting model streams the visible response and may use supported OpenVibely runtime capabilities. |

Reference outputs do not appear as separate Chat or task messages. The final response, task updates, attachments, and channel replies behave like output from the configured aggregator.

## Cost And Capacity

Each turn calls every reference model and then the aggregator. The Models dialog displays the expected call count and a cost warning. For example, three references mean four provider calls per turn.

Reference calls fan out concurrently, but they still consume provider capacity and may encounter provider rate limits. The mixture's effective tool support comes from the aggregator, while actual task execution remains subject to global, project, and model worker limits.

## Failure And Timeout Behavior

A slow reference is bounded by the Reference Timeout. Reference advice is best-effort context; inspect the final response rather than assuming every configured reference contributed successfully.

If the mixture is too slow or expensive, reduce the reference count, shorten the timeout, or choose faster reference configs. Use a single model for routine work where consensus is not valuable.

## Editing And Deleting Models

You cannot delete a model config while a mixture still depends on it as a reference or aggregator. Edit or delete the mixture first, then remove the underlying config.

Changing an underlying model affects every mixture that references it. Use clear config names so the dependency is obvious in the Models UI.

## Tool Policy

References are advisory and cannot mutate tasks, schedules, repositories, channels, or GitHub. Only the aggregator acts as the runtime model. If its provider or selected agent does not support a capability, adding a reference that supports it does not make that capability available.

## Related Pages

| Page | Why It Matters |
|---|---|
| [Models Overview](models.html) | Create model configs and defaults. |
| [Model Selection & Tool Policy](model-selection-tool-policy.html) | Tool availability follows the aggregator. |
| [Model Providers](model-providers.html) | Configure the underlying provider models. |
| [Worker Capacity & Dispatch](workers.html) | Task execution still respects capacity controls. |
